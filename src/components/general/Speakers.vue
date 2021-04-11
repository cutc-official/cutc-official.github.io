<template>
<div id="speakers">
	<h2>Take a Look at CUTC 2020</h2>
	<router-link v-if="limit" to="/speakers">View all speakers ></router-link>
</div>
</template>

<script>

export default {
	name: 'Speakers',
	props: {
		limit: Number
	},
	methods: {
		getImage(pic) {
			try {
				return require("@/assets/" + pic);
			} catch(e) {
				// throw Error(`pic does not exist: ${pic}`);
			}
		},
	}
}
</script>

<style scoped>
a {
	color: var(--main-color);
	text-decoration: underline;
}
</style>
