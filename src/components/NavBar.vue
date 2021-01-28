<template>
	<nav>
		<img src="../assets/logo.svg">
		<a href="#about">About</a>
		<a href="#speakers">Speakers</a>
		<a href="#testimonials">Testimonials</a>
		<a href="#sponsors">Sponsors</a>
		<a href="#faq">FAQ</a>
		<!-- <router-link to='/'>Home</router-link> -->
		<!-- <router-link :to='{name: "Blog", params: {post: "main"}}'>Read our blog</router-link> -->
	</nav>
</template>


<script>
export default {
	name: 'NavBar',
}
</script>

<style scoped>
nav {
	display: flex;
	align-items: center;
	padding: 1% var(--splash-page-inset);
	background: var(--nav-color);
}
a {
	padding-left: 2em;
}
</style>
