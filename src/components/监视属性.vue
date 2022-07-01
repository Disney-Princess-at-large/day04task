<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: "",
    }
  },
  watch: {
    name:{
      handler(newVal,oldVal){
        console.log(newVal,"============",oldVal);
      }
    }
  }
}
</script>

<style>

</style>