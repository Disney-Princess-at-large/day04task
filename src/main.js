import Vue from "vue"; //引入vue
import App from "./App.vue"; //引入app.vue 应用的根组件
import "bootstrap/dist/css/bootstrap.css"; // 默认找文件夹下的index文件(但是这个不是所以需要写路径)
import moment from "moment";
Vue.config.productionTip = false; //提示语

Vue.filter("toDown", (val) => {
  return val.toLowerCase();
});

Vue.filter("toReverse", (val, split) => {
  return val
    .split("")
    .reverse()
    .join(split || "");
});
Vue.filter("setData", (val, str = "-") => {
  return moment(val).format(`YYYY${str}MM${str}DD`);
});
new Vue({
  //实例化vue对象出来
  render: (h) => h(App), //渲染根应用
}).$mount("#app"); //渲染出来的挂载到页面
