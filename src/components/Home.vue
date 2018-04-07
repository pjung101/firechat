<template>
  <div>
    <h1>Google Sign In</h1>
    <div>
      <a v-if="!currentUser" @click="signIn()">Sign in</a>
      <a v-if="currentUser" @click="signOut()">Sign out</a>
      <a @click="checkUser()">Check User</a>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider()
export default {
  data () {
    return {
      currentUser: null
    }
  },
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(provider).then(() => {
        console.log('firebase user', firebase.auth().currentUser)
			}).catch(function(error) {
				const errorCode = error.code
				const errorMessage = error.message
				const email = error.email
				console.log('errorCode', errorCode, 'errorMessage', errorMessage, 'email', email)
			})
    },
    checkUser () {
      console.log('checkUser', firebase.auth().currentUser)
    }
  }
}
</script>

<style scoped>
</style>
