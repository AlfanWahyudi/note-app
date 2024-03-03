import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Quasar } from 'quasar'
import quasarOptions from './config/quasar-options'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

// Use Quasar
app.use(Quasar, quasarOptions)

// use router
app.use(router)

app.mount('#app')
