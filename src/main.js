import { createApp } from 'vue';
import App from './App.vue';
import Toaster from "@meforma/vue-toaster";
import './assets/css/main.css';


createApp(App).use(Toaster).mount('#app')
