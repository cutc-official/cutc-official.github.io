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

      <!--<div id="sponsors">
			<h2>Our 2020 Sponsors and Partners</h2>
			<img
				src="../assets/sponsors2020.png"
				alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"
			/>
      </div>-->

      <!-- Dropdown -->
      <faq />
      <!-- Unsure? -->
      <!-- <team /> -->
      <contributors />
    </div>
    <bottom />
  </span>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Hero from "../components/homePage/Hero.vue";
import About from "../components/homePage/About.vue";
import Speakers from "../components/homePage/Speakers.vue";
import Testimonials from "../components/homePage/Testimonials.vue";
import Faq from "../components/homePage/Faq.vue";
// import Team from "../components/homePage/Team.vue";
import Contributors from "../components/homePage/Contributors.vue";
import Bottom from "../components/homePage/Footer.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Hero,
    About,
    Speakers,
    Testimonials,
    Faq,
    // Team,
    Contributors,
    Bottom
  }
};
</script>

<style scoped>
.home-content {
  width: 80%;
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

#sponsors > img {
  width: 90%;
  margin: auto;
}

.footer {
  display: flex;
  align-items: center;
  padding: 1% 0;
  background: var(--nav-color);
}
.footer > a {
  padding-left: 2em;
}
</style>