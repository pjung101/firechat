import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/functions'

const config = {
	apiKey: "AIzaSyBPHPV8w9pV9Yrhl9jEXFRKJqLOz3UyjQ4",
	authDomain: "firechat-3c4cb.firebaseapp.com",
  projectId: "firechat-3c4cb",
	messagingSenderId: "413700252041",
}

const firebaseApp = firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

// const messaging = firebaseApp.messaging()
// messaging.usePublicVapidKey("BIC1tflO5r6HfcY4TEAurgJ83sCPsQY_sifAEg8Y02fj8Ic578cQSNd5hlmgI26FIHEsLVVmm0YwNNddE5dpMaQ")

// messaging.requestPermission().then(function() {
//   console.log('Notification permission granted.')
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err)
// })

export default {
  install (Vue) {
    console.log('setup_firebase install')
    Vue.prototype.$firebase = firebaseApp
    Vue.prototype.$firestore = db
  }
}
