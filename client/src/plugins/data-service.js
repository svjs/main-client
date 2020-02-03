import Vue from 'vue';

const dataService = new Vue({
	data() {
		return {
			user: {
				loggedIn: false,
			}
		};
	}
});

export default (Vue, settings) => {
	if (settings.development) window.dataService = dataService;
	Vue.prototype.dataService = dataService;
};
