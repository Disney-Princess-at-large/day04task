<template>
  <div>
    <h1>过滤器接收参数{{ message | reverse(11) }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue",
    };
  },
  filters: {
    reverse(val, i) {
      return val.split("").push(i)
    },
  },
};
</script>

<style>
</style>
