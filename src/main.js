import './assets/main.css'
// import './assets/organigramme.css'


import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
import 'vue-multiselect/dist/vue-multiselect.css'



const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(VueBlocksTree)

app.mount('#app')
