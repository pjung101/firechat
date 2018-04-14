import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import ChannelNew from '../pages/ChannelNew.vue'

const routes = [
  { path: '/channels/new', component: ChannelNew, name: 'newChannel' },
  { path: '/', component: Home, name: 'home' }
]

export default new VueRouter({
  mode: 'history',
	routes
})
