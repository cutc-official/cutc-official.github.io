<template>
<div id="speakers">
	<h2>CUTC 2020</h2>
	<div id="TABS">
		<p id="tab" @click="currentPage = 0"> Speakers </p>
		<p id="tab" @click="currentPage = 1"> Events </p>
	</div>
	<div id="content">
		<p v-if="currentPage == 0"> speaker info </p>
		<p v-else> event info </p>
	</div>
</div>
</template>


<script>
export default {
	name: 'Speakers',
	data () {
		return {
		currentPage: 0,
		}
	}
}
</script>

<style scoped>
#speakers {
	margin: 1em;
	background: var(--nav-color);
}
#TABS {
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
