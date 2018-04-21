import VueFire from 'vuefire'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import SetupFirebase from './plugin/setup_firebase.js'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(SetupFirebase)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

