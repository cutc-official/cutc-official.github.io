<template>
	<h2>Schedule</h2>
	<router-link v-if="link" to="/schedule">View full schedule ></router-link>
	<div>
		<schedule-tile v-bind="scheduleData['8:00'][0]"/>
	</div>
</template>

<script>
import json from "@/content/schedule.json";
import ScheduleTile from "@/components/general/ScheduleTile.vue";

export default {
	name: 'Schedule',
	components: {
		ScheduleTile
	},
	props: {
		link: Boolean
	},
	data() {
		return {
			scheduleData: json
		}
	}
}
</script>

<style scoped>
a {
	color: var(--main-color);
	text-decoration: underline;
}
</style>