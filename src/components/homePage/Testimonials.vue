<template>
  <div id="testimonials">
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
                <div id="title">
                <img :src="slide.image" id="person" />
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
    getImage() {
      const jsonObjects = TestimonialInfo['slides'];
      console.log("here")
      document.getElementById("displayPic").src = jsonObjects[0].image;
    }
  }
}
</script>

<style scoped>
#testimonials {
	margin: 1em;
  color: black;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
}

#building {
  height: 40em;
  float: left; 
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

  #slides {
    width: 60%;
    height: 70%;
  }
}

@media screen and (max-width:1110px) {
  #building {
    height: 25em;
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

  #slides {
    width: 90%;
    height: 100%;
  }
}

@media screen and (max-width:800px) {
  #building {
    height: 17em;
  }

  #slides {
    width: 100%;
    height: 120%;
  }
}

@media screen and (max-width:700px) {
  #building {
    display: none;
  }

  #person {
    margin: 3%;
  }

  #title {
    font-size: 12px;
  }

  #content {
    font-size: 11px;
  }
}

@media screen and (max-width:600px) {
  #person {
    width: 70%;
  }
}

@media screen and (max-width:550px) {
  #person {
    width: 60%;
  }

  #content {
    font-size: 10px;
  }
}

@media screen and (max-width:450px) {
  #person {
    width: 50%;
  }

  #title {
    font-size: 11px;
  }

  #content {
    font-size: 8px;
  }
}

@media screen and (max-width:400px) {
  #person {
    width: 40%;
  }

  #title {
    font-size: 10px;
  }

  #content {
    font-size: 7px;
  }
}

@media screen and (max-width:360px) {
  #person {
    width: 30%;
  }

  #title {
    font-size: 9px;
  }

  #content {
    font-size: 6px;
  }
}
</style>