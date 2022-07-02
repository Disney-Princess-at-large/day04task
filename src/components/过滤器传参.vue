<template>
  <div>
    <h1>过滤器接收参数{{ message | reverse(5651325) }}</h1>
  </div>
</template>

<script>
export default {
    name:"VF",
  data() {
    return {
      message: "Hello, Vue",
    };
  },
  filters: {
    reverse:(val,i) => {
      return val.split("").push(i);
    },
  },
};
</script>

<style>
</style>