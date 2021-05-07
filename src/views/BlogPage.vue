<template>
<div>
	<nav-bar/>
	<blog class="blog-wrapper"/>
	<bottom/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Blog from '@/components/general/Blog.vue'
import Bottom from '@/components/general/Footer.vue'


export default {
	name: 'BlogPage',
	components: {
		NavBar,
		Blog,
		Bottom,
	},
}
</script>

<style scoped>

.blog-wrapper {
	max-width: 1120px;
	padding: 1.5rem;
	margin: auto;
}

</style>