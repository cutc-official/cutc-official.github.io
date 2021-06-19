<template>
<div class="header">
	<h2>Featured Events</h2>
	<!--<router-link to="./views/schedule" class="schedule-link">
		View all events and full schedule >
	</router-link>-->
</div>
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
.schedule-link {
	color: var(--main-color);
	text-decoration: underline;
}
.header {
	display: flex;
	align-items: baseline;
	column-gap: 40px;
}
.content{
	display: grid;
	grid-template-columns: 40% 55%;
	grid-auto-rows: 50% 50%;
	grid-gap: 0% 4%;
	grid-template-areas: 
		"pink blue"
		"pink green";
}
.box{
	border-radius: 10px;
	display: flex;
}
.pink{
	background-color: #ED7C77;
	width: 100%;
	grid-area: pink;
	flex-direction: column;
}
.blue{
	background-color: #0094B5;
	width: 100%;
	grid-area: blue;
	flex-direction: row;
	margin-bottom: 5%;
}
.green{
	background-color: #44AF69;
	width: 100%;
	grid-area: green;
	flex-direction: row-reverse;
}
h3{
	font-weight: bold;
	padding: 25px 25px 5px 25px;
}
ul{
	padding: 0px 50px 10px 50px;
}
li{
	padding: 5px 0px;
}
#astronaut, #illustration{
	padding: 0px 20px;
	height: 80%;
	margin: auto 0px;
}
@media screen and (max-width:1250px) {
	ul{
		padding-bottom: 0px;
	}
	#astronaut, #illustration{
		padding: 0px 20px;
		width: 20%;
		margin: auto;
	}
}
@media screen and (max-width:880px) {
	.header{
		display: flex;
		flex-direction: column;
	}
	.content{
		display: flex;
		flex-direction: column;
	}
	.content > div{
		margin: 3% auto;
	}
	.box{
		flex-direction: column;
	}
	ul{
		padding-bottom: 0px;
	}
	#astronaut, #illustration{
		padding: 0px 0px 20px 0px;
		width: 20%;
		margin: auto;
	}
}
</style>