
import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { database } from '@/services/firebase'
import VueAnalytics from 'vue-analytics'

Vue.use(firestorePlugin)
Vue.use(VueResource)
Vue.use(VueAnalytics, {
  id: 'UA-101944993-1',
  router
})
Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	render: h => h(App)
  }).$mount('#app')




  
  

