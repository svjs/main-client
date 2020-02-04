import Vue from 'vue';
import {api, EVENTS} from './api';

const dataService = new Vue({
	data() {
		return {
			user: {
				loggedIn: false,
			}
		};
	},
	methods: {
		async init() {
			this.user.loggedIn = await api.emit(EVENTS.AUTH.GET);
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
