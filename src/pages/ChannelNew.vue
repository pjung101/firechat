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
						<router-link  class="button is-text" :to="{ name: 'home' }">Cancel</router-link>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>
</style>
