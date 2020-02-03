import ioClient from 'socket.io-client';

let socket;
let api;

export function ApiPlugin(Vue, settings) {
	if (!socket) {
		socket = ioClient();
	}
	if (!api) {
		api = {
			async emit(eventName, data) {
				return new Promise((resolve, reject) => {
					socket.emit(eventName, data, (res) => {
						resolve(res);
					});
				});
			},
			on(eventName, handler) {
				socket.on(eventName, handler);
			}
		};
	}

	if (settings.development) window.api = api;
	Vue.prototype.api = api;
}