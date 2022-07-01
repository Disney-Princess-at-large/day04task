<template>
  <div>
      <div>
          <span>姓:</span>
          <input type="text" v-model="firstName"><br>
          <span>名:</span>
          <input type="text" v-model="lastName"><br>
          <span>全名:</span>
          <input type="text" v-model="full">
      </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
  data() {
    return {
      firstName:'',
      lastName:'',
    }
  },
  computed:{
    full:{
      get(){
        return this.firstName ?this.firstName + '-' + this.lastName : ''
      },
      set(val){
       let arr = val.split('-')
       this.firstName = arr[0]
       this.lastName = arr[1]
      }
    }
  }
}
</script>

<style>

</style>