<template>
  <div id="testimonials">
    <h2>Hear what people have to say about CUTC!</h2>
    <img src="../../assets/testimonials/testimonial_building.svg" class="building" />
    <!-- :bullets="mobileView" :arrows="!mobileView" :slideRatio="slideRatio"
    <template v-slot:bullet="{ active }">
      <i class="bullet" :class="active ? 'active' : ''"></i>
    </template> leaving this here because I haven't quite fiured out how to make bullets appear for mobile --> 
    <swiper class="swiper-container" :loop="true" :autoHeight="true" :pagination="{ clickable: true }" :autoplay="{ delay: 10000 }">
      <swiper-slide
        v-for="(slide, i) in information.slides" 
        :key="i"
      >
        <div class="slide slide-container">
          <div class="title">
            <img :src="getImage(slide.image)" class="person" :alt="slide.name + '\'s Photo'"/>
            <br/>
            <strong> {{ slide.name }} </strong>
            <br/> 
            <strong> {{ slide.personDescription }} </strong>
          </div>
          <div class="content">"{{ slide.content }}"</div>
        </div>
      </swiper-slide>
    </swiper>
  </div> 
  <br style="clear:both" />
</template>

<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import TestimonialInfo from "../../content/testimonials.json";

SwiperCore.use([Pagination, Autoplay]);

export default {
  name: 'Testimonials',
  components: { Swiper, SwiperSlide },
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
        this.slideRatio = 2.7/1;
      }
      this.mobileView = window.innerWidth <= 550
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

.swiper-container {
  margin-top: 10%;
}

.slide-container {
  margin: auto;
  padding: 2%;
}

.slide {
  width: 98%;
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