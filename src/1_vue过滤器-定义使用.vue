<template>
  <div>
    <p>原来的样子: {{ msg }}</p>
    <!-- 2. 过滤器使用
      语法: {{ 值 | 过滤器名字 }}
     -->
    <p>使用翻转过滤器: {{ msg | reverse }}</p>
    <p :title="msg | toUp">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello, Vue",
    };
  },
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style>
</style>
