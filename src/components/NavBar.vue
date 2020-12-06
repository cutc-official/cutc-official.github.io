<template>
<span>
	<nav>
		<img src="../assets/logo.svg">
		<!-- <router-link to='/'>Home</router-link>
		<router-link :to='{name: "Blog", params: {post: "main"}}'>Read our blog</router-link> -->
	</nav>
</span>
</template>


<script>
export default {
	name: 'NavBar',
}
</script>

<style>
nav {
	display: flex;
	background: var(--main-color);
	padding: 1% var(--splash-page-inset);
}
</style>