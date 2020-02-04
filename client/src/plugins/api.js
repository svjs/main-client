import ioClient from 'socket.io-client';
import CONSTS from '../../../constants';

const socket = ioClient();
const api = {
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

function ApiPlugin(Vue, settings) {
	if (settings.development) window.api = api;
	Vue.prototype.api = api;
}

const EVENTS = CONSTS.EVENTS;

export {
	ApiPlugin,
	api,
	EVENTS
};