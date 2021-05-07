<template>
<div>
	<nav-bar/>
	<div class="blog-wrapper">
	<blog/>
	</div>
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
	padding-left: 150px;
	gap: 5vh 10vw;
}

</style>