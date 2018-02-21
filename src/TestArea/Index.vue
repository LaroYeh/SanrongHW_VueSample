<template>
  <div id="TestBasic">
  <div>
    <router-link to="/testBasic/compData">CompData</router-link>
    <router-link to="/testBasic/compProp">CompProp</router-link>
    <router-link to="/hello">Hello (No Related Parent)</router-link>
  </div>    
    <router-view/>
  </div>    

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TestBasic'
})

</script>


<style>

#TestBasic a{
  border-radius: 0px 0px 20px 20px;
  padding: 10px;  
  border-color: rgb(0, 153, 115);
  border-width: 2px;
  border-style:solid;
  background-color: rgb(0, 153, 115);
  color: white;
}
</style>