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
			<swiper v-if="sectionName == currentPage" :loop="true" :autoHeight="true" :pagination="{ clickable: true }" :navigation="!isMobile">
				<swiper-slide v-for="(slide, i) in section" :key="i">
					<div class="slide-wrapper">
						<img v-if="slide.image" :src="getImage(slide.image)" :alt="slide.name + '\'s Photo'" />
						<p :class="{'bold-text': sectionName == 'Events'}">
							<i>{{ slide.content }}</i>
							<br/>
							<strong>{{ slide.name }}</strong>
							{{ slide.tagLine }}
						</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SpeakerInfo from "@/content/speakers.json";

SwiperCore.use([Navigation, Pagination]);

export default {
	components: { Swiper, SwiperSlide },
	name: 'Speakers',
	data: () => ({
		information: SpeakerInfo,
		currentPage: 'Speakers', // ! CONSTANT SHOULD BE DYNAMICALLY SET
		isMobile: false
	}),
	methods: {
		getImage(pic) {
			try {
				return require("@/assets/speakers/" + pic);
			} catch(e) {
				// throw Error(`pic does not exist: ${pic}`);
			}
		},
		handleResize() {
			this.isMobile = window.innerWidth <= 550
			console.log(this.isMobile)
		},
	},
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	}
}
</script>

<style scoped>
#speakers {
	--swiper-theme-color: #E84545;
}

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
	max-width: 80%;
	margin: auto;
	align-items: center;
}
.slide-wrapper>img {
	max-width: 50%;
	height: 50%; /* hacky way of doing the aspect ratio of 1-1 */
	margin-right: 10%;
	border-radius: 50%;
	transform: scale(0.8);
}
.slide-wrapper>p {
	display: flex;
	flex-direction: column;
	text-align: start;
  margin-bottom: 2rem;
}

.bold-text {
	font-size: 1.3em;
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

	.slide-wrapper > img {
		margin-right: 0;
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
