import {IoAdapter} from "@nestjs/platform-socket.io";

export class SvjsSocketIoAdapter extends IoAdapter {
	createIOServer(port: number, options?: any): any {
		const server = super.createIOServer(port, {
			...options,
		});
		return server;
	}
}