import { createApp } from 'vue'
import App from './App.vue'
import 'devextreme/dist/css/dx.material.blue.light.css';
import 'devextreme/dist/js/dx.all.js'
import { DxButton, DxTextBox, DxDateBox, DxTextArea } from 'devextreme-vue'
import '@/assets/style/global.scss'

const app = createApp(App)

app.component('DxButton', DxButton)
app.component('DxTextBox', DxTextBox)
app.component('DxDateBox', DxDateBox)
app.component('DxTextArea', DxTextArea)

app.mount('#app')
