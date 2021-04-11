import { createApp } from 'vue';
import App from './App.vue';
import router from "@/views/index";

const app = createApp(App)
// Plugins
app.use(router)
// * Adds the app to the div with the id 'app'
app.mount('#app')
