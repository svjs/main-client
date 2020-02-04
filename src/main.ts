import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SvjsSocketIoAdapter} from "./app.io.adapter";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix('api');
	app.useWebSocketAdapter(new SvjsSocketIoAdapter(app));
	await app.listen(9093);
}

bootstrap();
