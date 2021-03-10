<template>
<span style="scroll">
	<div class="fade">
		<nav-bar/>
		<hero/>
	</div>
	<!-- Timeline -->
	<about/>
	<!-- Tab -->
	<speakers/>
	<!-- Carousel -->
	<testimonials/>

	<div id="sponsors">
		<h2>Sponsors</h2>
		<!-- <img src="Sponsors image.png?" alt=""> -->
	</div>

	<!-- Dropdown -->
	<faq/>
	<!-- Unsure? -->
	<team/>

	<div class="footer">
		<a href="https://www.facebook.com/cutc2021/" target="_blank">Facebook</a>
		<a href="https://www.instagram.com/cutc2021/" target="_blank">Instagram</a>
		<a href="https://www.linkedin.com/company/canadian-undergraduate-technology-conference/" target="_blank">LinkedIn</a>
	</div>
</span>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Hero from '../components/homePage/Hero.vue';
import About from '../components/homePage/About.vue';
import Speakers from '../components/homePage/Speakers.vue';
import Testimonials from '../components/homePage/Testimonials.vue';
import Faq from '../components/homePage/Faq.vue';
import Team from '../components/homePage/Team.vue';

export default {
	name: 'Home',
	components: {
		NavBar,
		Hero,
		About,
		Speakers,
		Testimonials,
		Faq,
		Team,
	}
}
</script>

<style scoped>
.fade {
	background: linear-gradient(180deg, #FF4E4E 0%, #FFAEAE 66.67%, #FFC5C5 77.6%, #FFD8D8 87.5%, #FFFFFF 100%);
}

#sponsors {
	margin: 1em;
	background: var(--nav-color);	
}

.footer {
	display: flex;
	align-items: center;
	padding: 1% 0;
	background: var(--nav-color);
}
.footer>a {
	padding-left: 2em;
}
</style>