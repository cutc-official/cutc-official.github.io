<template>
<div id="speakers">
	<div class="header">
		<h2>Our Speakers</h2>
		<router-link v-if="limit" to="/speakers" class="view-more">View all speakers ></router-link>
	</div>

	<div class="grid" ref="grid">
		<div class="tile" v-for="(speaker, i) in speakers" :key="speaker">
			<!-- PHOTO -->
			<div class="image">
				<div class="image-background" :style="{'background': getColor(i)}"/>
				<img :src="getImage(speaker.image)" :alt="speaker.name + '\'s Photo'">
			</div>
			<!-- OVERLAY -->
			<div class="overlay">
				<div class="text">
					<h3>{{ speaker.name }}</h3>
					<p>{{ speaker.title }}</p>
				</div>
				<a v-for="(link, linkType) in speaker.links" :key="link" :href="link" target="_blank">
					<img :src="getLinkImage(linkType)" :alt="link">
				</a>
			</div>
		</div>
	</div>

	<h3 v-if="!limit" class="coming-soon">
		and {{ 50 - speakers.length }}+ more speakers coming soon!
	</h3>
</div>
</template>

<script>
// Copied from https://www.notion.so/justinachua/c21925a8417546619ac10ecc28ebeba5?v=e69ab087042641d895b9ac9a4f233c9a
import SpeakersContent from '@/content/speakers.json';

export default {
	name: 'Speakers',
	props: {
		limit: Number
	},
	data() {
		return {
			speakers: this.limit ? SpeakersContent.slice(0, this.limit) : SpeakersContent,
			colors: [
				'#8394F2',
				'#F57A75',
				'#17ADCE',
				'#F9AFAB',
				'#44AF69',
			]
		}
	},
	methods: {
		getImage(pic) {
			try {
				return require("@/assets/speakers/Speaker=" + pic);
			} catch(e) {
				// throw Error(`pic does not exist: ${pic}`);
			}
		},
		getLinkImage(linkType) {
			try {
				return require("@/assets/speakers/links/" + linkType + '.svg');
			} catch(e) {
				// throw Error(`link type does not exist: ${linkType}`);
			}
		},
		getColor(i) {
			return this.colors[i % this.colors.length]
		}
	},
}
</script>

<style scoped>
#speakers {
	max-width: 1120px;
	margin: auto;
	--icon-width: 1.5rem;
	--tile-radius: 1rem;
}

.view-more {
	color: var(--main-color);
	text-decoration: underline;
	margin-left: 1rem;
}

.header {
	display: flex;
	align-items: baseline;
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 3vh 6vw;
}
.tile {
	position: relative;
}

.image {
	position: relative;
	width: calc(100% - var(--icon-width) - .5rem);
	height: 100%;
}
.image>img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--tile-radius);
}
.image-background {
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;
	width: 100%;
	height: 80%;
	border-radius: var(--tile-radius);
}

.tile>.overlay {
	position: absolute;
	right: 0;
	bottom: -1rem;
	width: 90%;

	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
}
.overlay>.text {
	background: white;
	box-shadow: 0 2px 4px #00000040;
	border-radius: 16px;
	padding: .7rem 1.2rem;
}
.text>p {
	line-height: 1.3;
}
/* Link image */
.overlay>a>img {
	width: var(--icon-width);
}

h3, p {
	color: black;
}

.coming-soon {
	margin-top: 1em;
	text-align: center;
	font-weight: 600;
}

@media screen and (max-width: 850px) {
	.grid {
		grid-template-columns: 1fr 1fr;
	}
	.overlay>.text {
		padding: .5rem;
		font-size: 2.4vw;
	}
}
@media screen and (max-width: 550px) {
	#speakers {
		--icon-width: 1rem;
	}
}
</style>
