import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '.././components/HelloWorld.vue';
import About from '.././components/About.vue';
import Login from '.././components/Login.vue';

import TestBasic from '.././TestArea/Index.vue';
import CompData from '.././TestArea/CompData.vue';
import CompProp from '.././TestArea/CompProp.vue';
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
    {
      //使用巢狀結構 https://router.vuejs.org/en/essentials/nested-routes.html
      path: '/testBasic',
      name: 'TestBasic',
      component: TestBasic,
      children: [
        {
          path: '/testBasic/compData',
          name: 'CompData',
          component: CompData
        },  
        {
          path: '/testBasic/compProp',
          name: 'CompProp',
          component: CompProp
        }, 
      ]
    },  
    
  ]
});
