<template>
  <div id="app">
    <div id="Header">
      <div>
        <img src="./assets/logo.png" style="height:50px">
      </div>
      <div>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/testBasic">TestArea</router-link>
        <router-link to="/testBasic/compData">CompData(TestArea's child)</router-link>
      </div>
    </div>   
    <router-view id="body"/>
    <div id="Footer">Footer</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app'
})
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a{
  text-align:center;
  border-radius: 25px;
  padding:  0px 40px; 
  border-color:rgb(0, 153, 115); 
  border-width: 2px;
  border-style:solid;
}

/*單欄的排版 http://www.wibibi.com/info.php?tid=405*/
#Header{
  border-top:solid rgb(0, 153, 115);
  border-left: solid rgb(0, 153, 115);
  border-right: solid rgb(0, 153, 115);
  border-bottom: dashed rgb(0, 153, 115);
  font-weight:bold;
  padding: 10px;
  text-align:center;
}
#body{
  border-left: solid rgb(0, 153, 115);
  border-right: solid rgb(0, 153, 115);
  font-weight:bold;
  padding: 10px;
  text-align:center;
}
#Footer{
  border-top:dashed rgb(0, 153, 115);
  border-left: solid rgb(0, 153, 115);
  border-right: solid rgb(0, 153, 115);
  border-bottom: solid rgb(0, 153, 115);
  font-weight:bold;
  height:60px;
  line-height:60px;
  text-align:center ;
}
</style>
