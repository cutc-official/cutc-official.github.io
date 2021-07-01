<template>
<h2>Featured Events</h2>
<div class="content">
	<div class="box pink">
		<div class="pinkText">
			<h3>Learn more about</h3>
			<ul>
				<li>Technology and how it affects our world in keynotes with the president of <b>Shopify</b>, leaders at <b>Facebook</b>, co-founder of <b>Sidewalk Labs</b> and many more</li>
				<li>Diversity and inclusion in tech with our numerous panels with industry leaders</li>
				<li>Entrepreneurship from our fireside chat with Michael Ioffe, a founder of a <b>YC-backed</b> company</li>
			</ul>
		</div>
		<img id="group" src="@/assets/schedule/group.svg" alt="group">
	</div>
	<div class="box blue">
		<div class="blueText">
			<h3>Explore tech with</h3>
			<ul>
				<li>Breakout sessions on product, AI/ML, crypto, and sports</li>
				<li>Panels on different paths into SWE, venture capital, and Asia’s tech scene</li>
			</ul>
		</div>
		<img id="astronaut" src="@/assets/schedule/astronaut.svg" alt="astronaut">
	</div>
	<div class="box green">
		<div class="greenText">
			<h3>Grow your career with</h3>
			<ul>
				<li>Résumé roasts with previous interns at <b>Apple</b> and <b>Tesla</b></li>
				<li>Sessions with recruiters from well-known companies</li>
				<li>Career workshops with <b>Wonsulting</b></li>
			</ul>
		</div>
		<img id="illustration" src="@/assets/schedule/illustration.svg" alt="illustration">
	</div>
</div>
<div class="view-more">
	<router-link to="/schedule">View full schedule</router-link>
</div>
</template>

<script>
export default {
	name: 'SchedulePreview',
	props: {
		link: Boolean
	}
}
</script>

<style scoped>
.content {
	display: grid;
	grid-template-columns: 45% 1fr;
	grid-gap: 2rem;
	grid-template-areas: 
		"pink blue"
		"pink green";
}

.box {
	border-radius: 1rem;
	display: flex;
	width: 100%;
}
.pink {
	background-color: #ED7C77;
	grid-area: pink;
	flex-direction: column;
	justify-content: space-between;
}
.blue {
	background-color: #0094B5;
	grid-area: blue;
	flex-direction: row;
}
.green {
	background-color: #44AF69;
	grid-area: green;
	flex-direction: row-reverse;
}

h3 {
	font-weight: bold;
	padding: 1.5rem;
	padding-bottom: 0;
}
ul {
	padding: 0 3rem;
}
li {
	padding: .25rem;
}
#astronaut, #illustration{
	padding: 0 1rem;
	height: 80%;
	margin: auto 0;
}

@media screen and (max-width:1250px) {
	#astronaut, #illustration {
		width: 20%;
		margin: auto;
	}
}
@media screen and (max-width:850px)  {
	.content {
		display: flex;
		flex-direction: column;
	}
	.box {
		flex-direction: column;
	}
	#astronaut, #illustration {
		padding-bottom: 1rem;
	}
}
</style>