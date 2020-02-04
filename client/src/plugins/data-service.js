import Vue from 'vue';
import {api, EVENTS} from './api';

const dataService = new Vue({
	data() {
		return {
			user: {
				loggedIn: false,
				id      : null
			}
		};
	},
	methods: {
		async init() {
			const authInfo = await api.emit(EVENTS.AUTH.GET);
			this.user.loggedIn = authInfo.loggedIn;
			if (!this.user.loggedIn) return;

			this.user.id = authInfo.info.id;
		}
	}
});

const DataServicePlugin = (Vue, settings) => {
	if (settings.development) window.dataService = dataService;
	Vue.prototype.dataService = dataService;
};
export {
	DataServicePlugin,
	dataService
};
