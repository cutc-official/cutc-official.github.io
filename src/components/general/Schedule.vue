<template>
	<h2>Schedule</h2>
	<router-link v-if="link" to="/schedule">View full schedule ></router-link>
	<div>
		<schedule-tile title="hi"/>
	</div>
</template>

<script>
import ScheduleTile from "@/components/general/ScheduleTile.vue";

export default {
	name: 'Schedule',
	components: {
		ScheduleTile
	},
	props: {
		link: Boolean
	},
}
</script>

<style scoped>
a {
	color: var(--main-color);
	text-decoration: underline;
}
</style>