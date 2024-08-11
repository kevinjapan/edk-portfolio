import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import AppStatus from './components/App/AppStatus/AppStatus.vue'
import './style.css'
import './assets/css/markdown.css'


const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

// Global Component Registration
app.component('AppStatus', AppStatus)

// mount application instance on DOM element (app container)
// The .mount() method should always be called after all app configurations and asset registrations are done.
app.mount('#app')
