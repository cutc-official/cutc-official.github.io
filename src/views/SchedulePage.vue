<template>
<div>
	<nav-bar/>
	<schedule/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Schedule from '@/components/general/Schedule.vue';

export default {
	name: 'SchedulePage',
	components: {
		NavBar,
		Schedule
	}
}
</script>

<style scoped>

</style>