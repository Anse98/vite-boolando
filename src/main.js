import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHeart, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faSquarePinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faHeart, faBagShopping, faTwitter, faFacebook, faInstagram, faSquarePinterest, faYoutube, fasHeart, faCircleXmark)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
