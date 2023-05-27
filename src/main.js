import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './router'
import App from './App.vue'


const app = createApp(App)

import * as ElIcon from '@element-plus/icons-vue'
Object.keys(ElIcon).forEach((key) => {
  app.component(key, ElIcon[key])
})

app.use(ElementPlus)
app.use(router)
app.mount('#app')