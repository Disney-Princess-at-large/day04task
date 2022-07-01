<template>
  <div>
    {{msg | toUp}}
  <div>{{msg | toDown}}</div>
  <div v-bind:title='msg| toUp'>{{msg |toUp| toReverse('*')}}</div>
  </div>
</template>

<script>
// 局部过滤器
// filters: {过滤器名字: (值) => {return "返回处理后的值"}
export default {
data() {
    return {
      msg:"Hello, world"  
    }
},
filters:{
    toUp(val){
        console.log(val);
        return val.toUpperCase();
    }
}
}
</script>

<style>

</style>