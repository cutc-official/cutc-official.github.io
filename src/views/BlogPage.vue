<template>
<div>
	<nav-bar/>
	<h2>Our Blog</h2>
	<bottom/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Bottom from '@/components/general/Footer.vue'


export default {
	name: 'Blog',
	components: {
		NavBar,
		Bottom,
	},
}
</script>

<style scoped>

</style>