<template>
<div id="speakers">
	<div id="tabs">
		<p class="tab" v-bind:class="[isActive ? 'underlined' : 'none']" @click="currentPage = 0; toggleStyle()"> Speakers </p>
		<p class="tab" v-bind:class="[isActive ? 'underlined' : 'none']" @click="currentPage = 1; toggleStyle()"> Events </p>
	</div>
  
	<vueper-slides v-if="currentPage == 0">
		<template v-slot:arrow-right>
			<img src="../../assets/Arrow.svg"/>
		</template>
		<template v-slot:arrow-left>
		</template>
		<vueper-slide 
			v-for="(slide, i) in slides" 
			:key="i" 
			:title="slide.title" 
			:content="slide.content">
			<template v-slot:content>
            <div class="vueperslide__content-wrapper" style="flex-direction: row">
				<img src="../../assets/elonmusk.svg" id="person" />
            </div>
          </template>
		</vueper-slide>
	</vueper-slides>
	<vueper-slides v-else>
		<template v-slot:arrow-right>
			<img src="../../assets/Arrow.svg"/>
		</template>
		<template v-slot:arrow-left>
		</template>
		<vueper-slide 
			v-for="(slide, i) in slides"  
			:key="i" 
			:title="slide.title" 
			:content="slide.content" />
	</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	methods: {
	toggleStyle: function() {
		this.isActive = !this.isActive;
	}
},
	components: { VueperSlides, VueperSlide },
	name: 'Speakers',
	data: () => ({
		slides: [
			{
				content: 'words words words words words words words words words words words words words words words',
				image: "../../assets/elonmusk.svg"
			},
			{
				content: 'more words more words more words more words more words more words more words more words more words',
				image: "../../assets/elonmusk.svg"
			}
		],
		currentPage: 0,
}),
	
}
</script>

<style scoped>
#speakers {
	margin: 1em;
	background: #FFF5F5;
	color: black;
}
#person {
	float: left;
}
#tabs {
	margin: 0 auto;
	display: flex;
}
#content {
	padding: 40px;
	display: flex;
}
#tab {
	overflow: hidden;
	display: flex;
	padding: 30px;
	cursor: pointer;
	margin: 0 auto;
	text-align: center;
	float: center;
}
.underlined{
	overflow: hidden;
	display: flex;
	padding: 30px;
	cursor: pointer;
	margin: 0 auto;
	text-align: center;
	float: center;
	border-bottom:#FF5B5B;
	text-align: center;
	float: center;
}

.blue{
  background: blue;
}
.vueperslides__bullet .default {
  background: #FF4E4E;
}
.vueperslides__bullet--active .default {background-color: #42b983 !important;}
.vueperslides__bullet span {
  display: block !important;
}
</style>
