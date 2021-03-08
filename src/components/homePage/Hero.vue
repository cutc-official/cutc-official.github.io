<template>
<div id="hero">
	<div class="intro">
		<img src="../../assets/building.svg" id="cutc-building-image">
		<!-- TEXT COLUMN -->
		<span>
			<h3>Welcome to the 2021</h3>
			<h1>Canadian Undergraduate Technology Conference</h1>
			<!-- <h2>Building our Future</h2> -->
			<div style="height: 1em"/>

			<h3>Jul 24-25, 2021 • Virtual Event</h3>

			<!-- Begin Mailchimp Signup Form -->
			<form action="https://cutc.us10.list-manage.com/subscribe/post?u=73d566326ae6bb629b42fb5fd&amp;id=e28a4a51fe" method="post" 
					target="_blank" novalidate>
				<input type="email" name="EMAIL" placeholder="Enter your email for updates!" required>
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73d566326ae6bb629b42fb5fd_e28a4a51fe" tabindex="-1" value=""></div>
				<input type="submit" value="Submit">
			</form>
			<!-- End Mailchimp Signup Form -->

			<!-- LINKS -->
			<a href="https://2020.cutc.ca" target="_blank">Check out CUTC 2020</a>
		</span>
	</div>
	<countdown/>
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
.intro {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: center;
	column-gap: 1em;
	padding: 10% var(--splash-page-inset);
	box-sizing: border-box;
}
#cutc-building-image {
	max-height: 50vh;
	justify-self: end;
}

img {
	max-width: 100%;
}

input[type="email"] {
	width: 40%;
}
input[type="submit"] {
	margin-left: -60px;
	background: var(--main-color);
	color: white;
}
input:focus {
	outline:none;
}

a {
	font-size: 22;
  font-weight: 500;
}
</style>