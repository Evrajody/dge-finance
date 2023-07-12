import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
import Vue3Autocounter from 'vue3-autocounter'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('vue3-autocounter', Vue3Autocounter)

app.mount('#app')

