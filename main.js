import Vue from 'vue'
import App from './App.vue'
import ExpandOnTap from './plugin-entry'

Vue.config.productionTip = false

Vue.use(ExpandOnTap)

new Vue({
  render: h => h(App)
}).$mount('#app')