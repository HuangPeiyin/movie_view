import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import { Button, Menu, MenuItem, Icon, Row, Col, Card, Input  } from 'iview'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component('Button', Button)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Card', Card)
Vue.component('Input', Input)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
