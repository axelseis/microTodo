import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

// Configurar axios
axios.defaults.baseURL = 'http://localhost:3000' // Ajusta esto a la URL de tu API

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 