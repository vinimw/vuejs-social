import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/materialize.min.css'
import '@/js/materialize.min'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
