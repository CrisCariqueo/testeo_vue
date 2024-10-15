// [Original]
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// [Using Router]
import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
import router from './router.js';  // import router from './../router';

createApp(App).use(router).mount('#app')
