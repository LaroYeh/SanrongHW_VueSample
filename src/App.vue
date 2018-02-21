<template>
  <div id="app">
    <img src="./assets/logo.png">
  <div style="height: 40px">
    <router-link to="/hello">Hello</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/testBasic">TestArea</router-link>
    <router-link to="/testBasic/compData">CompData(TestArea's child)</router-link>
  </div>    
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app'
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a{
  border-radius: 20px 20px 0px 0px;
  padding: 10px;  
  border-color: #996600;
  border-width: 2px;
  border-style:solid;
}
</style>
