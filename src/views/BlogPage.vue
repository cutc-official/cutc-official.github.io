<template>
<div>
	<nav-bar/>
	<blog/>
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

</style>