<template>
	<span style="scroll">
		<div class="fade">
			<nav-bar />
			<hero />
		</div>

		<div class="home-content">
			<about />
			<speakers :limit="6"/>
			<schedule/>
			<testimonials />
			<sponsorship />
			<faq />
			<contributors />
		</div>
		<bottom />
	</span>
</template>

<script>
import NavBar from "@/components/general/NavBar.vue";
import Hero from "@/components/homePage/Hero.vue";
import About from "@/components/homePage/About.vue";
import Speakers from "@/components/general/Speakers.vue";
import Schedule from '@/components/general/Schedule.vue';
import Testimonials from "@/components/homePage/Testimonials.vue";
import Sponsorship from '@/components/homePage/Sponsorship.vue';
import Faq from "@/components/homePage/Faq.vue";
import Contributors from "@/components/homePage/Contributors.vue";
import Bottom from "@/components/general/Footer.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		Hero,
		About,
		Speakers,
		Schedule,
		Testimonials,
		Sponsorship,
		Faq,
		Contributors,
		Bottom,
	}
};
</script>,
		Sponsorship

<style>
.home-content {
	width: 80%;
	max-width: 1200px;
	margin: auto;
}

h2 {
	margin-top: 2em;
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