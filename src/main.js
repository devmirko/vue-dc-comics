import Vue from 'vue'
import App from './App.vue'

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import the fontawesome core */
 import { library } from '@fortawesome/fontawesome-svg-core'

// /* import specific icons */
 import { fas } from '@fortawesome/free-solid-svg-icons'

 library.add(fas)



 Vue.component('fa', FontAwesomeIcon) 


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
