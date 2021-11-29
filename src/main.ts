import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import axios from "axios";
import Qs from "qs";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  render: h => h(App)
}).$mount("#app");

function getCookie(name: string) {
  let arr;
  const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
setInterval(() => {
  //标识 coverageId=${taskId} Cookie中或者query参数中追加
  console.log("覆盖率上报开始" + new Date());
  const taskId = getCookie("coverageId");
  const coverageData = window.__coverage__;
  const data = {
    coverageId: taskId,
    coverageData
  };
  axios({
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    url: "/coverage/client",
    data
  });
  console.log("覆盖率上报结束" + new Date());
}, 10000);
