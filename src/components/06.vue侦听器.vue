<template>
  <div>
    <input type="text" v-model.lazy='name'>
  </div>
</template>

<script>
export default {
data() {
  return {
    name:'123'
  }
},
// 目标: 侦听到name值的改变
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
        // newVal 是改变之后的值
        // oldVal 是改变之前的值  
      }
    }
  */
watch:{
  name(newVal,oldVal){
  // newVal: 当前最新值
  // oldVal: 上一刻值
    console.log(newVal,oldVal);
  }
}
}
</script>

<style>

</style>