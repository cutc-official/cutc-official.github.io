<template>
  <div id="testimonials">
    <h2 class="headline">Hear what people have to say about CUTC!</h2>
    <div class="testimonials-wrapper">
      <img src="../../assets/testimonials/testimonial_building.svg" class="building" />
      <vueper-slides 
        class="no-shadow" 
        :bullets="mobileView"
        :touchable="false" 
        :arrows="!mobileView"
        :disableArrowsOnEdges="true"
        :arrowsOutside="true"
        :slideRatio="slideRatio"
        autoplay
      >
        <vueper-slide 
          v-for="(slide, i) in information.slides" 
          :key="i"
        >
          <template v-slot:content>
            <div class="vueperslide__content-wrapper">
              <div class="slide">
                <div class="title">
                  <img :src="getImage(slide.image)" class="person" :alt="slide.name + '\'s Photo'"/>
                  <br/>
                  <strong> {{ slide.name }} </strong>
                  <br/> 
                  <strong> {{ slide.personDescription }} </strong>
                </div>
                <div class="content">"{{ slide.content }}"</div>
              </div>
            </div>
          </template>
        </vueper-slide>
        <template v-slot:bullet="{ active }">
          <i class="bullet" :class="active ? 'active' : ''"></i>
        </template>
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
  data() {
    return {
      information: TestimonialInfo,
      slideRatio: 0,
      mobileView: false,
    };
  },
  methods: {
    getImage(pic) {
      try {
        return require("../../assets/testimonials/" + pic);
      } catch(e) {
        // throw Error(`testimonials.json references image that does not exist in assets: "${pic}"`);
      }
    },
    handleResize() {
      if(window.innerWidth > 850) {
        this.slideRatio = window.innerHeight / window.innerWidth / 1.5;
      } else {
        this.slideRatio = window.innerHeight / window.innerWidth / 0.9;
      }
      if(window.innerWidth > 550) {
        this.mobileView = false;
      } else {
        this.mobileView = true;
      }
    },
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }
}
</script>

<style scoped>
#testimonials {
	margin: 4em 0;
  color: black;
}

.building {
  height: 60vh;
  float: left; 
}

.slide {
  width: 80%;
  max-width: 40em;
  background: #FEEAEA;
  display: flex;
}

.title {
  margin: 2rem;
  margin-right: 1rem;
  flex: 15;
}

.person {
  height: 131px;
  border-radius: 50%;
}

.content {
  margin: 2rem;
  margin-left: 1rem;
  text-align: left;
  flex: 30;
}

i.bullet {
  position: relative;
  top: 1rem;
  display: block;
  height: 1rem;
  width: 1rem;
  background: #F46766;
  border-radius: 50%;
}
i.bullet.active {
  background: #C8190F;
}

@media screen and (max-width:850px) {
  .building {
    display: none;
  }
  .person {
    margin: 3%;
  }
  .slide {
    flex-direction: column;
    border-radius: 0.25rem;
  }
  .title {
    margin-bottom: 0;
    font-size: 24px;
  }
  .content {
    font-size: 18px;
  }
}
@media screen and (max-width: 550px) {
  #testimonials {
    margin: 0;
  }
  #testimonials h2 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>