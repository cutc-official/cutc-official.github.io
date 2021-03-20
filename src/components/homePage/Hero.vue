<template>
<div id="hero">
	<div class="building">
		<countdown/>
		<img src="../../assets/hero.svg" id="cutc-building-image">
	</div>
	<!-- TEXT COLUMN -->
	<span>
		<h3>Welcome to the 2021</h3>
		<h1>Canadian Undergraduate Technology Conference</h1>
		<h2 class="slogan">Possibility Taking Shape</h2>
		<div style="height: 1em"/>

		<h3>Jul 24-25, 2021 • Virtual Event</h3>

		<!-- Begin Mailchimp Signup Form -->
		<form action="https://cutc.us10.list-manage.com/subscribe/post?u=73d566326ae6bb629b42fb5fd&amp;id=e28a4a51fe" method="post" 
				target="_blank" novalidate>
			<input type="email" name="EMAIL" placeholder="Enter your email for updates!" required>
			<button>
				<img src="../../assets/Group.svg">
			</button>
			<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
			<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73d566326ae6bb629b42fb5fd_e28a4a51fe" tabindex="-1" value=""></div>
		</form>
		<!-- End Mailchimp Signup Form -->

		<!-- LINKS -->
		<a href="https://2020.cutc.ca" target="_blank">Check out CUTC 2020</a>
	</span>
</div>
</template>

<script>
import Countdown from './Countdown.vue';

export default {
	name: 'Hero',
	components: {
		Countdown
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
	font-size: 32px;
	font-weight: 400;
	color: white;
	margin: 0;
}
@media screen and (max-width: 850px) {
	.slogan {
		font-size: 24px;
	}
}

button {
  position: relative;
  top: 6px;
  right: 8.5%;
  border: none;
  background-color: #A3241D;
  border-top-right-radius: 45%;
  padding-right: 14px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 7px; 
  border-bottom-right-radius: 45%;
}

input[type="email"] {
	width: min(95%, 400px);
	font-family: inherit;
	border: 1px solid #A3241D;
	border-style: solid;
}
input:focus {
	outline:none;
}

a {
	font-size: 22;
  font-weight: 500;
}
</style>