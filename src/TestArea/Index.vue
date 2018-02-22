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


<style scoped >
a{
  text-align:center;
  border-radius: 25px;
  padding:  0px 40px; 
  border-color: rgb(0, 153, 115);
  border-width: 2px;
  border-style:solid;
  background-color: rgb(0, 153, 115);
  color: white;
}
</style>