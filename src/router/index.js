import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from "@/views/Registration.vue";
// import Blog from '@/views/Blog.vue';

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/registration',
		name: 'Registration',
		component: Registration,
	},
	// {
	//   path: '/blog/:post',
	//   name: 'Blog',
	//   component: Blog,
	// }
];

const router = createRouter({
	// Required for gh-pages deployment
	history: createWebHistory('/'),
	routes
});

export default router;