import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Socket} from "socket.io";
import {AppService} from "./app.service";
import {EVENTS} from '../constants';
import {createParamDecorator} from "@nestjs/common";

const SvjsSession = createParamDecorator((data: string, req) => {
	return req[0].handshake.session;
});

@WebSocketGateway()
export class AppGateway {

	constructor(private readonly appService: AppService) {
	}

	@SubscribeMessage(EVENTS.AUTH.GET)
	async authGet(@ConnectedSocket() client: Socket, @SvjsSession() session): Promise<{ loggedIn: boolean, info?: {} }> {
		// return this.appService.authGet(session);
		return {
			loggedIn: false,
			info: {}
		}
	}

	@SubscribeMessage(EVENTS.AUTH.NEW_USER)
	async authNewUSer(@MessageBody() data: { login: string, password: string }): Promise<boolean | { error: string }> {
		return this.appService.authNewUser(data);
	}

	@SubscribeMessage(EVENTS.AUTH.DO)
	async authDo(client: Socket, payload: { login: string, password: string }): Promise<boolean> {
		return this.appService.authDo(payload);
	}

}
