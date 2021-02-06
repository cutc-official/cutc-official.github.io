<template>
  <div id="testimonials">
    <div>
      <img src="../../assets/testimonial_building.svg" id="building" />
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
            <h2 id="hear">Hear what people have to say about CUTC!</h2>
            <div class="vueperslide__content-wrapper" style="flex-direction: row">
              <div id="slides">
                <div id="title">
                  <img :src="getImage(slide.image)" id="person" />
                  <br />
                  <strong> {{ slide.name }} </strong>
                  <br/> 
                  <strong> {{ slide.personDescription }} </strong>
                </div>
                <div id="content">{{ slide.content }}</div>
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
  },
  methods: {
    getImage(pic) {
      try {
        return require("../../assets/" + pic);
      } catch(e) {
        throw Error(`testimonials.json references image that does not exist in assets: "${pic}"`);
      }
    }
  }
}
</script>

<style scoped>
#testimonials {
	margin: 4em;
  color: black;
  font-family: Montserrat;
  font-style: normal;
}

#building {
  height: 40em;
  float: left; 
}

#hear {
  position: relative;
  top: 20%;
  left: 25%;
  font-weight: bold;
}

#slides {
  width: 50%;
  height: 50%;
  background: #FEEAEA;
  float: right; 
}

#title {
  float: left;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 6%;
}

#person {
  width: auto;
  height: auto;
}

#content {
  margin: 8%;
  text-align: left;
}

@media screen and (max-width:1450px) {
  #slides {
    width: 50%;
    height: 60%;
  }
}

@media screen and (max-width:1310px) {
  #building {
    height: 30em;
  }

  #hear {
    top: 15%;
    left: 20%;
  }

  #slides {
    width: 60%;
    height: 70%;
  }
}

@media screen and (max-width:1110px) {
  #building {
    height: 25em;
  }

  #hear {
    top: 9%;
    left: 15%;
    font-size: 20px;
  }

  #slides {
    width: 70%;
    height: 85%;
  }
}

@media screen and (max-width:930px) {
  #building {
    height: 20em;
  }

  #hear {
    top: 1%;
    left: 5%;
    font-size: 20px;
  }

  #slides {
    width: 90%;
    height: 100%;
  }
}

@media screen and (max-width:800px) {
  #building {
    display: none;
  }

  #hear {
    display: none;
  }

  #slides {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width:700px) {
  #person {
    margin: 3%;
    height: 80px;
  }

  #title {
    font-size: 12px;
  }

  #content {
    font-size: 11px;
  }
}

@media screen and (max-width:550px) {
  #person {
    height: 60px;
  }

  #content {
    font-size: 9px;
  }
}

@media screen and (max-width:450px) {
  #person {
    height: 50px;
  }

  #title {
    font-size: 11px;
  }

  #content {
    font-size: 8px;
  }
}

@media screen and (max-width:400px) {
  #title {
    font-size: 10px;
  }

  #content {
    font-size: 7px;
  }
}

@media screen and (max-width:360px) {
  #title {
    font-size: 9px;
  }

  #content {
    font-size: 6px;
  }
}
</style>