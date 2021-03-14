<template>
<div id="speakers">
	<div class="tabs">
		<p class="tab" :class="[currentPage == 0 ? 'underlined' : '']" @click="currentPage = 0; toggleStyle()"> Speakers </p>
		<p class="tab" :class="[currentPage == 1 ? 'underlined' : '']" @click="currentPage = 1; toggleStyle()"> Events </p>
	</div>
  
	<vueper-slides v-if="currentPage == 0">
		<template v-slot:arrow-right>
			<img src="../../assets/Arrow.svg"/>
		</template>
		<vueper-slide 
			v-for="(slide, i) in information['slides']" 
			:key="i" >
			<template v-slot:content>
                  <img :src="getImage(slide.image)" id="person" :alt="slide.alt"/>
                {{ slide.content }}
        <div class="vueperslide__content-wrapper">
        </div>
      </template>
		</vueper-slide>
	</vueper-slides>
	<vueper-slides v-else>
		<template v-slot:arrow-right>
			<img src="../../assets/Arrow.svg"/>
		</template>
		<vueper-slide 
			v-for="(slide, i) in information['slides']" 
			:key="i" >
			<template v-slot:content>
                  <img :src="getImage(slide.image)" id="person" :alt="slide.alt"/>
                {{ slide.content }}
        <div class="vueperslide__content-wrapper">
        </div>
      </template>
		</vueper-slide>
	</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import SpeakerInfo from "../../content/speakers.json";

export default {
	components: { VueperSlides, VueperSlide },
	name: 'Speakers',
	data: () => ({
		information: SpeakerInfo,
		currentPage: 0,
}), 
	methods: {
		getImage(pic) {
			try {
				return require("../../assets/" + pic);
			} catch(e) {
				throw Error(`pic does not exist`);
			}
		}
	}
}
</script>

<style scoped>
#speakers {
	margin: 1em;
	background: #FFF5F5;
	color: black;
	font-family: Montserrat;

}
#person {
	float: left;
	margin-left: 40px;
	margin-top: 40px;
}

.tabs {
	margin: 0 auto;
	display: flex;
}
#content {
	padding: 400px;
	display: flex;
	font-weight: 100px;
	text-align: center;
	margin: 20%;
	font-style: italic;
	font-size: 24px;
	float: center;
	margin-left: auto;
    margin-right: auto;
    width: 8em;
}
.tab {
	overflow: hidden;
	display: flex;
	padding: 30px;
	cursor: pointer;
	margin: 0 auto;
	text-align: center;
	float: center;
	font-weight: 600;
	font-size: 32px;
	line-height: 36px;
	font-style: normal;
	text-align: center;
}
.underlined{
	text-decoration: 1px solid #FF5B5B;
}

.vueperslides__bullet .default {
  background: #FF4E4E;
}
.vueperslides__bullet--active .default {background-color: #42b983 !important;}
.vueperslides__bullet span {
  display: block !important;
}

.card-wrapper {
	width: 100%;
	height: 100%;
}

@media screen and (max-width:1450px) {
  #person {
	float: center;
  }
  #content {
    font-size: 17px;
  }
}

</style>
