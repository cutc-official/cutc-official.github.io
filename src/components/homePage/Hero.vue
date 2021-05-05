<template>
<div id="hero">
	<div class="building" v-cloak>
		<countdown/>
		<img src="@/assets/misc/hero.svg" id="cutc-building-image">
	</div>
	<!-- TEXT COLUMN -->
	<span>
		<h3>Welcome to the 2021</h3>
		<h1>Canadian Undergraduate Technology Conference</h1>
		<h2 class="slogan">Amplify</h2>
		<div style="height: 2em"/>

		<h3 style="font-weight: bold">Jul 24-25, 2021</h3>
		<h3>A free virtual event open to everyone worldwide</h3>
		<register-button/>

		<!-- LINKS -->
		<a href="https://2020.cutc.ca" target="_blank">Check out CUTC 2020</a>
	</span>
</div>
</template>

<script>
import Countdown from '@/components/homePage/Countdown.vue';
import RegisterButton from '@/components/general/RegisterButton.vue';

export default {
	name: 'Hero',
	components: {
		Countdown,
		RegisterButton
	},
	data: () => ({
		email: '',
		signup: true
	})
}
</script>

<style scoped>
#hero {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	/* align-items: center; */
	column-gap: 1em;
	padding: 10% var(--splash-page-inset);
	box-sizing: border-box;
}
.building {
	position: relative;
	height: min-content;
}
#cutc-building-image {
	max-height: 50vh;
	width: 100%;
	justify-self: end;
}

.slogan {
	font-size: 2em;
	font-weight: 600;
	color: white;
	margin: 0 !important;
}
@media screen and (max-width: 850px) {
	.slogan {
		font-size: 1.5em;
	}
}

form {
	display: flex;
	position: relative;
	justify-content: flex-start;
	margin: 1em 0;
}

.email-input {
	display: flex;
	width: 100%;
}

button {
	height: 100%;
	width: 60px;
	border: none;
	background-color:#A3241D;
	border-top-right-radius: 45%;
	border-bottom-right-radius: 45%;
	margin: 0;
}
button:focus {
	outline: none;
}

input[type="email"] {
	width: 95%;
	max-width: 400px;
	border: 1px solid #A3241D;
	border-right-width: 0;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	padding: 1rem;
	margin: 0;
}
input:focus {
	outline:none;
}

a {
	font-weight: 500;
	display: block;
	margin-bottom: 2em;
}

</style>
