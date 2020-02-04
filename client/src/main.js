import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {ApiPlugin} from './plugins/api';
import {DataServicePlugin, dataService} from './plugins/data-service';

Vue.config.productionTip = false;

Vue.use(ApiPlugin, {
	development: true
});
Vue.use(DataServicePlugin, {
	development: true
});

(async () => {
	await dataService.init();
})();

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
