import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faUser);


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Tool', Toolbar);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
