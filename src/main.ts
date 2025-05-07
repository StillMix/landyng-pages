import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import AppButton from './components/UI/AppButon.vue'

const app = createApp(App)
app.component('AppButton', AppButton)
app.mount('#app')
