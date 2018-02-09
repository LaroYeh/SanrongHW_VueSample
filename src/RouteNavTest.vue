import RouterNav from 'vue-router-nav'
 
Vue.use(RouterNav)
<template>
  <div id="app">
    <router-nav/>
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: 'app'
}
</script> 