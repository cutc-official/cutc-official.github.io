<template>
<span style="scroll">
	<nav-bar/>
	<div class="intro" id="container">
		<img src="../assets/building.svg" id="cutc-building-image">
		<!-- TEXT COLUMN -->
		<span>
			<h3>Welcome to the 2021</h3>
			<h1>Canadian Undergraduate Technology Conference</h1>
			<!-- <h2>Building our Future</h2> -->
			<div style="height: 1em"/>

			<h3>Jul 24-25, 2021 • Virtual Event</h3>
			<!-- <input 
				type="text"
				placeholder="Enter your email for updates!"
				v-model="email"
				@keyup.enter="addMailList"
			> -->
			<!-- LINKS -->
			<a href="https://2020.cutc.ca" target="_blank">Check out CUTC 2020</a>
		</span>
	</div>
</span>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
	name: 'Home',
	components: {
		NavBar
	},
	data: () => ({
		email: ''
	}),
	methods: {
		addMailList() {
			// TODO: IMPLEMENT EMAIL API
			console.log(this.email);
			this.email = ''; // Delete the user input
		}
	}
}
</script>

<style scoped>
.intro {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: center;

	height: 50%;
	column-gap: 1em;
	padding: 10% var(--splash-page-inset);
	box-sizing: border-box;

	background: linear-gradient(180deg, #3C0805 0%, rgba(103, 8, 3, 0.8) 100%);
}

#cutc-building-image {
	max-height: 50vh;
	justify-self: end;
}

a {
	font-size: 22;
  font-weight: 500;
}
</style>
