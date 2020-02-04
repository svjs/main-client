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
	async handleMessage(client: Socket): Promise<Object> {
		return {};
	}
}
