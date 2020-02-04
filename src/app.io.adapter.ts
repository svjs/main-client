import {IoAdapter} from "@nestjs/platform-socket.io";
import {NestExpressApplication} from "@nestjs/platform-express";
import * as sharedsession from 'express-socket.io-session'

export class SvjsSocketIoAdapter extends IoAdapter {
	private app: NestExpressApplication;

	constructor(app: NestExpressApplication) {
		super(app);
		this.app = app;
	}

	createIOServer(port: number, options?: any): any {

		const server = super.createIOServer(port, options);
		const session = require('express-session')({
			secret: 'TOP_SECRET',
			resave: true,
			saveUninitialized: true
		});

		this.app.use(session);
		server.use(sharedsession(session, {
			autoSave: true
		}));

		return server;
	}
}
