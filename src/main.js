import VueFire from 'vuefire'
import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueFire)

const config = {
	apiKey: "AIzaSyBPHPV8w9pV9Yrhl9jEXFRKJqLOz3UyjQ4",
	authDomain: "firechat-3c4cb.firebaseapp.com",
	messagingSenderId: "413700252041",
}
const firebaseApp = firebase.initializeApp(config)
// const messaging = firebaseApp.messaging()
// messaging.usePublicVapidKey("BIC1tflO5r6HfcY4TEAurgJ83sCPsQY_sifAEg8Y02fj8Ic578cQSNd5hlmgI26FIHEsLVVmm0YwNNddE5dpMaQ")

// messaging.requestPermission().then(function() {
//   console.log('Notification permission granted.')
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err)
// })

const vue = new Vue({
  render: h => h(App)
}).$mount('#app')

