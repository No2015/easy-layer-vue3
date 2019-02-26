import Vue from 'vue'
import App from './App.vue'
import layer from './lib/index'

Vue.config.productionTip = false

Vue.use(layer)

new Vue({
  render: h => h(App),
}).$mount('#app')