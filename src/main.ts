import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Register to global
Vue.config.productionTip = false;
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
