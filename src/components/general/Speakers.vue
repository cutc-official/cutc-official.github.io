<template>
<div id="speakers">
	<div class="header">
		<h2>Take a Look at CUTC 2020</h2>
		<router-link v-if="limit" to="/speakers" class="view-more">View all speakers ></router-link>
	</div>

	<div class="grid">
		<div class="tile" v-for="speaker in speakers" :key="speaker">
			<div class="image">
				<div class="image-background"/>
				<img :src="getImage(speaker.image)" :alt="speaker.name + '\'s Photo'">
			</div>

			<div class="text">
				<h3>{{ speaker.name }}</h3>
				<p>{{ speaker.title }}</p>
			</div>

			<div class="links">
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
			speakers: SpeakersContent
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
				return require("@/assets/socials/" + linkType + '.svg');
			} catch(e) {
				// throw Error(`link type does not exist: ${linkType}`);
			}
		}
	}
}
</script>

<style scoped>
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
	gap: 3rem;
}

.tile {
	position: relative;
	width: 100%;
}

.image {
	position: relative;
	width: fit-content;
	border-radius: 4rem;
}
.image>img {
	width: 100%;
}
.image-background {
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;
	width: 100%;
	height: 80%;

	background: #F57A75;
	border-radius: 1rem;
}

.text {
	position: absolute;
	right: 0;
	bottom: 0;

	background: white;
	box-shadow: 0 2px 4px #00000040;
	border-radius: 1rem;

	padding: 1rem;
}

.links {
	position: absolute;
	right: 0;
}

h3, p {
	color: black;
}
</style>
