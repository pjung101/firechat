<template>
  <div>
    <h1>Google Sign In</h1>
    <div>
      <a v-if="!currentUser" @click="signIn()">Sign in</a>
      <a v-if="currentUser" @click="signOut()">Sign out</a>
      <span v-if="currentUser">{{ currentUser.displayName }}</span>
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
    signOut () {
      firebase.auth().signOut()
    },
    onAuthStateChanged (user) {
      console.log('vue.onAuthStateChanged user', user)
      this.currentUser = user
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }
}
</script>

<style scoped>
</style>
