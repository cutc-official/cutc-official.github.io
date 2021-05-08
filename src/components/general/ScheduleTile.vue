<template>
	<div class="background">
		<p>{{ $props }}</p>
	</div>
</template>

<script>
export default {
	name: "ScheduleTile",
	props: {
		title: String,
		description: String,
		type: String,
		location: String,
		timestamp: String,
		tags: Array,
		speakers: Array
	},
}
</script>

<style scoped>
.background {
	background: grey;
}
</style>