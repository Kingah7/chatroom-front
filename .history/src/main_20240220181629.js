import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import { reqUserList } from './api'
import axios from 'axios'

Vue.use(ElementUI);

axios.get("http://localhost:8888/getUserList")

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
