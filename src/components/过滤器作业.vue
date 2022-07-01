<template>
  <div>
    <p>国内粉丝数量{{ fans | number(10000)}}</p>
    <p>国外粉丝数量{{ fans | number(1000)}}</p>
    ==================================================
    <p>时间:{{ time | date('-')}}</p>
    <p>时间:{{ time | date('/')}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fans: 1876986,
      time: new Date('2021-11-09')
    }
  },
  filters: {
    number:(val,num) => {
      let str;
      if(num === 1000){
        str = '千'
      }else{
        str = '万'
      }
      return val/num + str
    },
    date:(val,join) => {
     return val.toLocaleString().replaceAll('/', join).slice(0, 10).splice(8,0,'0')
    }
  },
}
</script>

<style></style>
