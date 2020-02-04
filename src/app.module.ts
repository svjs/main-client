import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AppGateway} from './app.gateway';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'USER_SERVICE',
				transport: Transport.TCP,
				options: {
					port: 9092
				}
			}
		]),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client/dist')
		})
	],
	controllers: [AppController],
	providers: [AppService, AppGateway],
})
export class AppModule {
}
