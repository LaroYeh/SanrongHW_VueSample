<!--測試Compoment: https://cn.vuejs.org/v2/guide/components.html-->
<template>
    <div>
        <h1>{{Title}}</h1>
        <div>
            <h2>父子間就算聲明，值也互不干擾</h2>
            <button v-on:click="counter += 1">{{ counter }}</button> 
        </div>
        <div>
            <h2>如果子data是回傳物件而不是function時，因為是指到同一個物件，所以顯示上會是連動的(如果是宣告成全域變數，上下頁或換頁面會保留值)</h2>
            <WrongComp></WrongComp>
            <WrongComp></WrongComp>
        </div>
        <div>
            <h2>必須透過Function回傳新物件才能確保彼此獨立</h2>
            <SepComp></SepComp>
            <SepComp></SepComp>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

export default Vue.extend({
  data: function () {
    return {
         Title: 'Return Data Test', 
         counter: 2
         }
  },
})

//Compoment為全域的宣告，局部宣告要再微調
var data = { counter: 10 }
Vue.component('WrongComp', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
    return data
    }
})

Vue.component('SepComp', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
    return {counter: 100}
    }
})
</script>
