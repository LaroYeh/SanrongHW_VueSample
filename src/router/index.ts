import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '.././components/HelloWorld.vue';
import About from '.././components/About.vue';
import Login from '.././components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: About
    },  
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }, 
    {
      path: '/about',
      name: 'Abount',
      component: About
    },    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },  
  ]
});
