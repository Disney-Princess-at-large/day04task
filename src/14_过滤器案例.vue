<template>
  <div>
    <h3>国内粉丝数量:{{ msg | numFn("国内") }}</h3>
    <h3>国外粉丝数量:{{ msg | numFn("国外") }}</h3>
    <h3>时间：{{ time | timer("-") }}</h3>
    <h3>时间：{{ time | timer("/") }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 1876986,
      time: 1636450540055,
    };
  },
  filters: {
    numFn(val, str) {
      if (str == "国内") {
        return val / 10000 + "W";
      } else {
        return val / 1000 + "K";
      }
    },
    timer(val, str) {
 
        let date = new Date(val);
        let y = date.getFullYear();
        let m =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return y + str + m + str + d;
    },
  },
};
</script>

<style>
</style>