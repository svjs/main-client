import {SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Socket} from "socket.io";
import {AppService} from "./app.service";

@WebSocketGateway()
export class AppGateway {

	constructor(private readonly appService: AppService) {
	}

	@SubscribeMessage('message')
	async handleMessage(client: Socket): Promise<string> {
		console.log('Haha, hohoh');
		return this.appService.getHello();
	}
}
