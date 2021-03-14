<template>
<div id="speakers">
	<h2>Take a Look at CUTC 2020</h2>
	<div class="info-2020">
		<p>2000 <br/> Attendees</p>
		<p>44 <br/> Speakers</p>
		<p>1 <br/> Conference</p>
	</div>

	<div class="speakers-events">
		<div class="tabs"> 
			<p
				v-for="(_, sectionName) in information"
				:key="sectionName"
				:class="currentPage == sectionName ? 'tab-select' : ''"
				@click="currentPage = sectionName"
			>
					{{ sectionName }}
			</p>
		</div>
		
		<div v-for="(section, sectionName) in information" :key="section">
			<vueper-slides
				v-if="sectionName == currentPage"
				class="no-shadow"
				:touchable="false"
				:slideRatio="slideRatio"
			>
				<template v-slot:arrow-left>
					<img src="../../assets/Arrow.svg" class="left-arrow arrow"/>
				</template>
				<template v-slot:arrow-right>
					<img src="../../assets/Arrow.svg" class="arrow"/>
				</template>

				<vueper-slide v-for="(slide, i) in section" :key="i">
					<template v-slot:content>
						<div class="vueperslide__content-wrapper">
							<div class="slide-wrapper">
								<img v-if="slide.image" :src="getImage(slide.image)" :alt="slide.name + '\'s Photo'"/>
								<p>
									<i>{{ slide.content }}</i>
									<br/>
									<strong>{{ slide.name }}</strong>
									{{ slide.tagLine }}
								</p>
							</div>
						</div>
					</template>
				</vueper-slide>

			</vueper-slides>
		</div>
	</div>
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
		currentPage: 'Speakers', // ! CONSTANT SHOULD BE DYNAMICALLY SET
		slideRatio: 0
	}),
	methods: {
		getImage(pic) {
			try {
				return require("../../assets/speakers/" + pic);
			} catch(e) {
				// throw Error(`pic does not exist: ${pic}`);
			}
		},
		handleResize() {
			this.slideRatio = window.innerHeight / window.innerWidth / 1.5 
		},
	},
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	}
}
</script>

<style scoped>
.info-2020 {
	display: flex;
	justify-content: space-around;
	background: #CD3027;
	border-radius: 8px;
	padding: 3em;
	margin: 1em 0;
}

.info-2020>p {
	width: 100%;
	font-size: 32px;
	font-weight: 600;
	text-align: center;
}
.info-2020>p:not(:last-child) {
	border-right: 2px solid white;
}

.speakers-events {
	margin: 1em 0;
	background: #FFF5F5;
	border-radius: 8px;
	color: black;
}

.tabs {
	margin: 0 auto;
	display: flex;
}
.tabs>p {
	padding: 1em;
	cursor: pointer;
	margin: 0 auto;
	font-weight: 600;
	font-size: 32px;
	line-height: 36px;
}
.tab-select{
	text-decoration: underline;
	text-decoration-color: #FF5B5B;  
}

.slide-wrapper {
	display: flex;
	justify-content: space-evenly;
	max-width: 70%;
}
.slide-wrapper>img {
	max-width: 50%;
	padding: 0 10% 0 0;
}
.slide-wrapper>p {
	display: flex;
	flex-direction: column;
	text-align: start;
}

.vueperslides__bullet .default {
	background: #FF4E4E;
}
.vueperslides__bullet--active .default {
	background-color: #42b983;
}
.vueperslides__bullet span {
	display: block;
}

.left-arrow {
	transform: rotate(180deg);
}

@media screen and (max-width:850px) {
	.info-2020 {
		padding: .5em;
		border-radius: 3px;
	}
	.info-2020>p {
		font-size: 13px;
	}

	.tabs {
		border: 1px solid #CD3027;
		border-radius: 3px;
		background: white;
	}
	.tab-select {
		background: #CD3027;
		text-decoration: none;
		color: white;
	}
	.tabs>p {
		font-size: 13px;
		padding: 0;
		width: 100%;
		text-align: center;
	}

	.arrow {
		width: 50%;
	}
	.slide-wrapper {
		flex-direction: column;
		align-items: center;
	}
	.slide-wrapper>img {
		padding: 0;
	}
}
</style>
