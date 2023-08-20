import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import { store, key } from './store';

const app = createApp(App)
app.use(router)
app.use(store, key)

app.mount('#app')
