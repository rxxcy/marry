import { createApp } from 'vue'
import { pinia } from './store'
import 'vant/lib/index.css'
import { Lazyload, Image } from 'vant'
import App from './App.vue'

createApp(App).use(pinia).use(Lazyload).use(Image).mount('#app')
