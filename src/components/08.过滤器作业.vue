<template>
  <div>
  <p>国内网站：粉丝数量：{{fans | number(10000)}}</p>
  <p>外国网站：粉丝数量：{{fans | number(1000)}}</p>
  
  <p>{{time |setData}}</p>
  <p>{{time |setData('/')}}</p>
  </div>
</template>

<script>
// Vue.filter("setData", (val, str = "-") => {
//   return moment(val).format(`YYYY${str}MM${str}DD`);
// });
export default {
data() {
  return {
    fans:1876986,
    time:1636450540055
  }
},
filters:{
  number:(val,num)=>{
    let str;
    if(num ===1000){
      str ="千"
    }else{
      str ="万"
    }
    return val/num + str
  }
}
}
</script>

<style>

</style>