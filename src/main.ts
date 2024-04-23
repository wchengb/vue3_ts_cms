import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import registerStore from './store'
import icons from './global/regiter-icons'

// 针对ElMessage和ElLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

// 1.全局注册element-plus: 方便和简洁
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'   全局样式
// app.use(ElementPlus)

// 2.按需引入
// import { ElButton } from 'element-plus'
// app.component(ElButton.name, ElButton)

// 3.图标的全局注册


const app = createApp(App)
app.use(icons)
app.use(registerStore)

app.use(router)
app.mount('#app')
