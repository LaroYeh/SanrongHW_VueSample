<!--測試Compoment: https://cn.vuejs.org/v2/guide/components.html-->
<template>
    <div>
        <h1>{{Title}}</h1>
        還沒try
    </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: function () {
    return {
         Title: 'Return Prop Test', 
         counter: 2
         }
  }
})


</script>
