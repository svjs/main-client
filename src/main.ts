import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SvjsSocketIoAdapter} from "./app.io.adapter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.useWebSocketAdapter(new SvjsSocketIoAdapter(app));
	await app.listen(9093);
}

bootstrap();
