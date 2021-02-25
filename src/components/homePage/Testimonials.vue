<template>
  <div id="testimonials">
    <h2>Testimonials</h2>
    <!-- SIDE SCROLLER -->
    <div>
      <img src="../../assets/testimonial_building.svg" id="building" />
      <vueper-slides class="no-shadow" :bullets="false" :arrows="false" autoplay>
        <vueper-slide 
          v-for="(slide, i) in information['slides']" 
          :key="i"  
        >
          <template v-slot:content>
            <div class="vueperslide__content-wrapper" style="flex-direction: row">
              <div id="slides">
                <img src="../../assets/pic.svg" />
                <span>{{ slide.title }}</span>
                <span>{{ slide.content }}</span>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <br style="clear:both" />
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
  color: black;
}

#building {
  height: 40em;
  float: left; 
}

#slides {
  width: 60%;
  margin: 10%;
  background: #FEEAEA;
  float: right; 
  color: black;
}
</style>