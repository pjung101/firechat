<template>
  <div class="container">
    <h1 class="title">
      New Channel
    </h1>
    <div class="columns">
			<div class="column is-one-third">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input class="input" type="text" v-model="newChannel.name" placeholder="Enter name" />
					</div>
				</div>
				<div class="field is-grouped">
					<div class="control">
						<a class="button is-link" @click="createChannel">Create</a>
					</div>
					<div class="control">
						<a class="button is-link" @click="testApi">Test API</a>
					</div>
					<div class="control">
						<router-link  class="button is-text" :to="{ name: 'home' }">Cancel</router-link>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import firebase from '@firebase/app'
import '@firebase/functions'
import axios from 'axios'

export default {
  data () {
    return {
      newChannel: {}
    }
  },
	methods: {
    createChannel () {
      console.log('createChannel', this.newChannel)
      this.$firestore.collection('channels').doc().set({
				name: this.newChannel.name
			})
    },
    testApi () {
      console.log('testApi')
			console.log('result', firebase.functions.https)
      axios.get('https://us-central1-firechat-3c4cb.cloudfunctions.net/helloWorld')
        .then(resp => {
          console.log('response', resp)
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  }
}
</script>

<style scoped>
</style>
