import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router/index';
import { store, key } from './store';

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(ElementPlus)

app.mount('#app')
