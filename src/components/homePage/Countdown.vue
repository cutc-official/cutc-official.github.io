<template>
	<div id="countdown">
		{{ timeStamp }}
	</div>
</template>

<script>
export default {
	name: 'Countdown',
	data: () => ({
		timeStamp: 0
	}),
	methods: {
		updateTimeStamp() {
			// Date objects...
		}
	}
}
</script>

<style scoped>
#countdown {
	width: 100%;
	padding: 1em;
	box-sizing: border-box;

	border: 1px solid black;
}
</style>