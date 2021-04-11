<template>
<div>
	<nav-bar/>
	<schedule/>
	<bottom/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Schedule from '@/components/general/Schedule.vue';
import Bottom from '@/components/general/Footer.vue'

export default {
	name: 'SchedulePage',
	components: {
		NavBar,
		Schedule,
		Bottom,
	}
}
</script>

<style scoped>

</style>