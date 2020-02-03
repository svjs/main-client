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

	async getHello(): Promise<string> {
		let res = this.userService.send<string>({cmd: 'test'}, {});
		let result = await res.toPromise();
		console.log(res, result);
		return result;
	}
}
