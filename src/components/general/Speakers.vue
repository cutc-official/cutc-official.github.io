<template>
<div id="speakers">
	<div class="header">
		<h2>Take a Look at CUTC 2020</h2>
		<router-link v-if="limit" to="/speakers" class="view-more">View all speakers ></router-link>
	</div>

	<div class="grid">
		<div class="tile" v-for="(speaker, i) in speakers" :key="speaker">
			<div class="image">
				<div class="image-background" :style="{'background': getColor(i)}"/>
				<img :src="getImage(speaker.image)" :alt="speaker.name + '\'s Photo'">
			</div>

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
</div>
</template>

<script>
import SpeakersContent from '@/content/speakers.json';

export default {
	name: 'Speakers',
	props: {
		limit: Number
	},
	data() {
		return {
			speakers: SpeakersContent,
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
				return require("@/assets/speakers/" + pic);
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
			return this.colors[i % this.colors.length];
		}
	}
}
</script>

<style scoped>
#speakers {
	--icon-width: 1.5rem;
	--tile-radius: 1rem;
}

.view-more {
	color: var(--main-color);
	text-decoration: underline;
	margin: 1.3em;
}

.header {
	display: flex;
	align-items: flex-end;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 3rem 6rem;
}
.tile {
	position: relative;
}

.image {
	position: relative;
	width: calc(100% - var(--icon-width) - .5rem);
	height: 95%;
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
	bottom: 0;

	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
}
.overlay>.text {
	background: white;
	box-shadow: 0 2px 4px #00000040;
	border-radius: 1rem;
	padding: 1rem;
}
/* Link image */
.overlay>a>img {
	width: var(--icon-width);
}

h3, p {
	color: black;
}
</style>
