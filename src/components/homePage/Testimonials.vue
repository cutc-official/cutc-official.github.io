<template>
  <div id="testimonials">
    <h2 class="headline">Hear what people have to say about CUTC!</h2>
    <div>
      <img src="../../assets/testimonials/testimonial_building.svg" class="building" />
      <vueper-slides 
        class="no-shadow" 
        :bullets="false" 
        :touchable="false" 
        :disableArrowsOnEdges="true"
        :arrowsOutside="true"
        autoplay
      >
        <vueper-slide 
          v-for="(slide, i) in information['slides']" 
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
      information: TestimonialInfo
    };
  },
  methods: {
    getImage(pic) {
      console.log(pic);
      try {
        return require("../../assets/testimonials/" + pic);
      } catch(e) {
        // throw Error(`testimonials.json references image that does not exist in assets: "${pic}"`);
      }
    }
  }
}
</script>

<style scoped>
#testimonials {
	margin: 4em;
  color: black;
}

.building {
  height: 40vw;
  float: left; 
}

.slide {
  width: min(80%, 40em);
  height: min(100%, min-content);
  background: #FEEAEA;
}

.title {
  float: left;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 6%;
  max-width: 30%;
}

.person {
  height: 131px;
  border-radius: 50%;
}

.content {
  margin: 8%;
  text-align: left;
}

@media screen and (max-width:850px) {
  .building {
    display: none;
  }
  .person {
    margin: 3%;
    height: 80px;
  }

  .title {
    font-size: 12px;
  }

  .content {
    font-size: 10px;
  }
}

@media screen and (max-width:550px) {
  .person {
    height: 30px;
  }

  .title {
    font-size: 10px;
  }

  .content {
    font-size: 7px;
  }
}

@media screen and (max-width:400px) {
  .title {
    font-size: 6px;
  }

  .content {
    font-size: 5px;
  }
}
</style>