import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/styles.css'

// import { OhVueIcon, addIcons } from "oh-vue-icons";
// import { FaHome } from "oh-vue-icons/icons";

// addIcons(FaHome);

const app = createApp(App)
// app.component("v-icon", OhVueIcon)

app.use(router)

app.mount('#app')
