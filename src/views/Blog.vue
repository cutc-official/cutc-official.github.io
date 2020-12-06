<template>
	<nav-bar/>
	<button
		@click='() => selectPost("demo")'
		>This is a possible blog
	</button>
	<p>You are viewing {{ $route.params.post }}</p>
</template>

<script>
import { onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

export default {
	name: 'Blog',
	components: {
		NavBar
	},
	methods: {
		selectPost(postId='main') {
			this.$router.push({ name: 'Blog', params: {'post': postId} })
		}
	}
}
</script>

<style scoped>

</style>