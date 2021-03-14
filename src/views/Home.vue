<template>
  <span style="scroll">
    <div class="fade">
      <nav-bar />
      <hero />
    </div>
    <!-- Timeline -->
    <about />
    <!-- Tab -->
    <speakers />
    <!-- Carousel -->
    <testimonials />

    <div id="sponsors">
      <h2 class="sponsor-headline">Our 2020 Sponsors and Partners</h2>
      <img
        src="../assets/sponsors2020.svg"
        alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"
        class="sponsor-img"
      />
    </div>

    <!-- Dropdown -->
    <faq />
    <!-- Unsure? -->
    <team />

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
import Team from "../components/homePage/Team.vue";
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
    Team,
    Bottom
  }
};
</script>

<style scoped>
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

#sponsors {
  margin: 1em;
}
.sponsor-headline {
  margin: 5%;
}
.sponsor-img {
  width: 90%;
  margin: 0 5%;
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