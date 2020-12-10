import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import Blog from '../views/Blog.vue';
// import About from '@/src/pages/About.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About Us',
  //   component: About,
  // },
  // {
  //   path: '/blog/:post',
  //   name: 'Blog',
  //   component: Blog,
  // }
];

// * REMOVE "/website/" FOR FILEZILLA
const router = createRouter({
  history: createWebHistory('/website/'), // Required for deployment
  routes,
});

export default router;