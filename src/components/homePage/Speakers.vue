<template>
<div id="speakers">
	<h2>CUTC 2020</h2>
	<div id="tabs">
		<p id="tab" @click="currentPage = 0"> Speakers </p>
		<p id="tab" @click="currentPage = 1"> Events </p>
	</div>
	<vueper-slides v-if="currentPage == 0">
		<vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
	</vueper-slides>
	<vueper-slides v-else>
		<vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
	</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	components: { VueperSlides, VueperSlide },
	name: 'Speakers',
	data: () => ({
		slides: [
			{
				title: 'Slide #1',
				content: 'Slide content.'
				}
				],
		currentPage: 0,
}),
	
}
</script>

<style scoped>
#speakers {
	margin: 1em;
	background: var(--nav-color);
}
#tabs {
	margin: 0 auto;
	display: flex;
}
#content {
	color: white;
	padding: 40px;
	display: flex;
}
#tab {
	overflow: hidden;
	display: flex;
	padding: 40px;
	cursor: pointer;
	margin: 0 auto;
	text-align: center;
	float: center;
}
 </style>
