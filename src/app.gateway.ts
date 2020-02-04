import {SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Socket} from "socket.io";
import {AppService} from "./app.service";
import {EVENTS} from '../constants';

console.log(EVENTS);

@WebSocketGateway()
export class AppGateway {

	constructor(private readonly appService: AppService) {
	}

	@SubscribeMessage(EVENTS.AUTH.GET)
	async authGet(client: Socket): Promise<{ loggedIn: boolean, info?: {} }> {
		return this.appService.authGet(client.handshake.headers);
	}

	@SubscribeMessage(EVENTS.AUTH.DO)
	async authDo(client: Socket, payload: { login: string, password: string }): Promise<boolean> {
		return this.appService.authDo(payload);
	}
}
