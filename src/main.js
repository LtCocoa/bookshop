import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { SimpleSVG } from 'vue-simple-svg';
import { createProvider } from './vue-apollo';
import './assets/css/global.css';

Vue.component('simple-svg', SimpleSVG);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
