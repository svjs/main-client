import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class AppService {

	constructor(@Inject('USER_SERVICE') private readonly userService: ClientProxy) {
	}

	async onApplicationBootstrap() {
		await this.userService.connect();
		console.log('Connected to the user service')
	}

	parseCookie(cookie: string): Object {
		const output = {};
		cookie.split(/\s*;\s*/).forEach((pair) => {
			let split = pair.split(/\s*=\s*/);
			output[split[0]] = split.splice(1).join('=');
		});
		return output;
	}

	async authGet(): Promise<true> {
		return true;
	}

	async authDo(data: { login: string, password: string }): Promise<boolean> {
		const result = await this.userService.send<boolean>({cmd: 'auth.do'}, data);
		return result.toPromise();
	}

	async authNewUser(data: { login: string, password: string }): Promise<boolean | { error: string }> {
		const res = await this.userService.send<boolean | { error: string }>({cmd: 'auth.new-user'}, data);
		return res.toPromise();
	}
}
