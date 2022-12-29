import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css';
import './css/styles.scss'

import * as bootstrap from 'bootstrap';
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';
import 'vue3-carousel/dist/carousel.css';

import 'aos/dist/aos.css'
import Aos from 'aos';
const app = createApp(App)

Aos.init();
app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(Vue3Marquee)
app.mount('#app')
