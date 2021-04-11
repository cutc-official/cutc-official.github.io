<template>
	<span style="scroll">
		<div class="fade">
			<nav-bar />
			<hero />
		</div>

		<div class="home-content">
			<!-- Timeline -->
			<about />
			<!-- Tab -->
			<speakers />
			<!-- Carousel -->
			<testimonials />

			<!-- Sponsorship -->
			<sponsorship />

			<!-- Dropdown -->
			<faq />
			<!-- Unsure? -->
			<contributors />
		</div>
		<bottom />
	</span>
</template>

<script>
import NavBar from "@/components/general/NavBar.vue";
import Hero from "@/components/homePage/Hero.vue";
import About from "@/components/homePage/About.vue";
import Speakers from "@/components/homePage/Speakers.vue";
import Testimonials from "@/components/homePage/Testimonials.vue";
import Sponsorship from '../components/homePage/Sponsorship.vue';
import Faq from "@/components/homePage/Faq.vue";
import Contributors from "@/components/homePage/Contributors.vue";
import Bottom from "@/components/homePage/Footer.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		Hero,
		About,
		Speakers,
		Testimonials,
		Sponsorship,
		Faq,
		Contributors,
		Bottom
	}
};
</script>,
		Sponsorship

<style scoped>
.home-content {
	width: 80%;
	max-width: 1200px;
	margin: auto;
}

.fade {
	background: linear-gradient(
		180deg,
		#ff4e4e 0%,
		#ffaeae 66.67%,
		#ffc5c5 77.6%,
		#ffd8d8 87.5%,
		#ffffff 100%
	);
}
@media screen and (max-width: 850px) {
	.fade {
		background: linear-gradient(
		180deg,
		#ff4e4e 5%,
		#ffaeae 66.67%,
		#ffc5c5 77.6%,
		#ffd8d8 90%,
		#ffffff 100%
	);
	}
}
</style>