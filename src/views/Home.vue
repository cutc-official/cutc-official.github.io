<template>
<span>
	<nav-bar/>
	<div class="intro" id="container">
		<img src="../assets/building.svg">
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
			<h4>
				<a href="#sign-up-form" id="scrollLink">Join our ambassador team</a> •
				<a href="https://2020.cutc.ca" target="_blank">Check out CUTC 2020</a>
			</h4>
		</span>
	</div>

	<div id="wrap">
		<iframe
			id="sign-up-form"
			src="https://docs.google.com/forms/d/e/1FAIpQLSenWSkfyO8tIkbBzCKUql000yg5ZEBPDKsCWeE0Rvp_cPuSsw/viewform?embedded=true"
			marginheight="0"
			marginwidth="0"
			frameborder="0"
		/>
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

	height: 50%;
	column-gap: 5em;
	padding: 10% var(--splash-page-inset);
	box-sizing: border-box;

	background: linear-gradient(180deg, #3C0805 0%, rgba(103, 8, 3, 0.8) 100%);
}

/* input {
	width: 60%;
} */

.links {
	display: flex;

}

iframe {
	width: 100%;
	min-height: var(--form-height);
	border: none;
	padding: 5em 0;
	margin: 0 auto;
	display: block;
}

@media(max-width: 650px) {
	iframe {
		min-height: calc(var(--form-height) * 1.1);
	}
}

@media(max-width: 520px) {
	iframe {
		min-height: calc(var(--form-height) * 1.15);
	}
}

@media(max-width: 465px) {
	iframe {
		min-height: calc(var(--form-height) * 1.25);
	}
}

@media(max-width: 420px) {
	iframe {
		min-height: calc(var(--form-height) * 1.33);
	}
}

@media(max-width: 350px) {
	iframe {
		min-height: calc(var(--form-height) * 1.4);
	}
}

#wrap {
	--form-height: 130em;
	background: #f1ecec;
}
</style>
