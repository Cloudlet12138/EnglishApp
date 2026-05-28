import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 开启持久化

app.use(pinia)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')
