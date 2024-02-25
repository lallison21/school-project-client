import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import Card from 'primevue/card'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

const app = createApp(App)

app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('Toast', Toast)
app.component('Card', Card)

app.mount('#app')
