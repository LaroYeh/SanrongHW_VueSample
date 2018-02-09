<template>
  <div class="hello">        
    <h2>Hello</h2>
    
    <form action="">
      A:
      <input type="text" v-model='A'/><br/>
      B:
      <input type="text"  v-model.number='B'/>
      <br/>
      <input type="button" v-on:click="test" value="click"/><br/>
      C:
      <input type="text" v-bind:value="calculate()"/>
      <div>{{D}}</div>
    </form>



  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch, Prop } from 'vue-property-decorator';



@Component
export default class HelloWorld extends Vue {
  public A : number = 0;
  public B : number = 0;
  public C : number = 0;
  public D : string = ' ';

  calculate(){
    return this.A + this.B ;
  }

  test(){
    this.C = this.calculate();
  }

  // computed
  get overTen(){
    if(this.A >= 10){
      return false;
    }else{
      return true;
    }
  }
   
  @Watch('C')
  AA(val: string, oldVal: string) {     
    this.D = 'old val:' + oldVal + ', new val:' + val; 
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
