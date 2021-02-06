<template>
  <div id="testimonials">
    <h2>Testimonials</h2>
    <!-- SIDE SCROLLER -->
    <vueper-slides>
      <vueper-slide 
        v-for="(slide, i) in information['slides']" 
        :key="i" 
        :title="slide.title" 
        :content="slide.content" 
        :image="slide.image" 
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import TestimonialInfo from "../../content/testimonials.json";

export default {
	name: 'Testimonials',
	components: { VueperSlides, VueperSlide },
  data () {
    return {
      information: TestimonialInfo
    };
  }
}
</script>

<style scoped>
#testimonials {
	margin: 1em;
	background: var(--nav-color);
}
</style>