<template>
	<h2>Our Blog</h2>
	<router-link v-if="limit" to="/blog">View all articles ></router-link>
</template>

<script>
export default {
	name: 'Blog',
	props: {
		limit: Number
	},
}
</script>

<style scoped>
a {
	color: var(--main-color);
	text-decoration: underline;
}
</style>