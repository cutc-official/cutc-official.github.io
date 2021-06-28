<template>
	<span style="scroll" id="home-page">
		<div class="fade">
			<nav-bar :hasBackground="false" />
			<hero />
		</div>

		<div class="home-content">
			<about />
			<speakers :limit="8" />
			<schedule-preview />
			<testimonials />
			<sponsorship />
			<blog :limit="6" />
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
import SchedulePreview from "@/components/homePage/SchedulePreview.vue";
import Testimonials from "@/components/homePage/Testimonials.vue";
import Sponsorship from "@/components/homePage/Sponsorship.vue";
import Blog from "@/components/general/Blog.vue";
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
		SchedulePreview,
		Testimonials,
		Sponsorship,
		Blog,
		Faq,
		Contributors,
		Bottom
	}
};
</script>

<style>
.home-content {
	width: 80%;
	max-width: 1200px;
	margin: auto;
}

#home-page h2 {
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
