import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from './features/GlobalComponents'

const app = createApp(App)


registerGlobalComponents(app).then(() => {
    app.mount('#app')
})