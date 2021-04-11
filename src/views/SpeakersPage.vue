<template>
<div>
	<nav-bar/>
	<speakers/>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import Speakers from '@/components/general/Speakers.vue';

export default {
	name: 'SpeakersPage',
	components: {
		NavBar,
		Speakers
	}
}
</script>

<style scoped>

</style>