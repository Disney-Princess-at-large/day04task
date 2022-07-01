<template>
  <div>
    <span>姓：</span>
    <input type="text" v-model="Firstname"><br>
    <span>名：</span>
    <input type="text" v-model="Secname"><br>
    <span>全称：</span>
    <input type="text" v-model="Fullname"><br>
  </div>
</template>

<script>
export default {
data() {
  return {
   Firstname:'',
   Secname:"",
  }
},
computed:{
 Fullname:{
  set(val){
  const arr=val.split(".");
  this.Firstname=arr[0]
  this.Secname=arr[1]
  },
  get(){
    return this.Firstname ?this.Firstname+'.'+this.Secname :''
  }
 }
}
}
</script>

<style>

</style>