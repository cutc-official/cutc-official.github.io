import { createApp } from 'vue';
import App from './App.vue';
import router from "@/views/index";

const app = createApp(App)
// Plugins
app.use(router)
// * Adds the app to the div with the id 'app'
app.mount('#app')

// Set up page tracking, because the router is in WebHashHistory mode (SPA)
// https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
// ga('set', 'page', router.currentRoute.path);
// ga('send', 'pageview');

// router.afterEach((to) => {
//   ga('set', 'page', to.path);
//   ga('send', 'pageview');
// });