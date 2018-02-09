<template>
  <div id="app">
    <img src="./assets/logo.png">
  <div>
    <router-link to="/hello">Hello</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
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
</style>
