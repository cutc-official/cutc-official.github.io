<template>
<div>
	<nav-bar/>
	<div class="speaker-wrapper">
		<speakers />
	</div>
	<bottom/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Speakers from '@/components/general/Speakers.vue';
import Bottom from '@/components/general/Footer.vue'

export default {
	name: 'SpeakersPage',
	components: {
		NavBar,
		Speakers,
		Bottom,
	}
}
</script>

<style scoped>
.speaker-wrapper {
	max-width: 1120px;
	width: 80%;
	margin: 2rem auto 5rem auto;
}
</style>