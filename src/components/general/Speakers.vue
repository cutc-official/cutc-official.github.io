<template>
	<div id="speakers">
		<h2>Our Speakers</h2>
		<div class="grid" ref="grid">
			<div
				class="tile"
				v-for="(speaker, name, i) in speakers"
				:key="speaker"
			>
				<!-- PHOTO -->
				<div class="image-wrapper">
					<p class="bio positioning">{{ speaker.bio }}</p>
					<div
						class="image-background positioning"
						:style="{ background: getColor(i) }"
					/>
					<img
						:src="getImage(name)"
						:alt="name + '\'s Photo'"
						class="image-speaker"
						width="288"
						height="432"
					/>
				</div>
				<!-- OVERLAY -->
				<div class="overlay">
					<div class="text">
						<h3>{{ name }}</h3>
						<p>
							{{ speaker.title }}
							{{ speaker.org ? " @ " + speaker.org : "" }}
						</p>
					</div>
					<a
						v-for="(link, linkType) in speaker.links"
						:key="link"
						:href="link"
						target="_blank"
					>
						<img :src="getLinkImage(linkType)" :alt="link" />
					</a>
				</div>
			</div>
		</div>

		<h3 v-if="!limit" class="coming-soon">
			More speakers coming soon!
		</h3>
		<div v-else class="view-more">
			<router-link to="/speakers">View all speakers</router-link>
		</div>
	</div>
</template>

<script>
// Copied from https://www.notion.so/justinachua/c21925a8417546619ac10ecc28ebeba5?v=e69ab087042641d895b9ac9a4f233c9a
import SpeakersContent from "@/content/speakers.json";

export default {
	name: "Speakers",
	props: {
		limit: Number,
	},
	data() {
		return {
			speakers: SpeakersContent,
			colors: ["#8394F2", "#F57A75", "#17ADCE", "#F9AFAB", "#44AF69"],
		};
	},
	methods: {
		getImage(name) {
			try {
				// speaker name is the exact same as the file path in speaker assets
				return require(`@/assets/speakers/Speaker=${name}.png`);
			} catch (e) {
				// throw Error(`pic does not exist: ${name}`);
				// image placeholder when name does not match the filename of a headshot
				return require(`@/assets/speakers/Speaker=Default.png`);
			}
		},
		getLinkImage(linkType) {
			try {
				return require("@/assets/speakers/links/" + linkType + ".svg");
			} catch (e) {
				// throw Error(`link type does not exist: ${linkType}`);
			}
		},
		getColor(i) {
			return this.colors[i % this.colors.length];
		},
	},
	beforeMount() {
		if (this.limit) {
			const sp = Object.entries(this.speakers).slice(0, this.limit);
			this.speakers = Object.fromEntries(sp);
		}
	},
};
</script>

<style scoped>
#speakers {
	--icon-width: 1.5rem;
	--tile-radius: 1rem;
	--bio-transition: all 0.5s ease;
}

.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem 4vw;
	font-size: min(1vw, 0.85rem);
}
.tile {
	position: relative;
}

.image-wrapper {
	position: relative;
	width: calc(100% - var(--icon-width) - 0.5rem);
	height: 100%;
	overflow: hidden;
}
.image-wrapper > .positioning {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80%;
}
.image-background {
	border-radius: var(--tile-radius);
	z-index: -1;
	transition: var(--bio-transition);
}
.image-speaker {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--tile-radius);
	transition: var(--bio-transition);
}

.bio {
	font-size: 0.6rem;
	box-sizing: border-box;
	padding: 1rem;
	z-index: 2;

	opacity: 0;
	color: whitesmoke;
	transition: var(--bio-transition);
}

.tile > .overlay {
	position: absolute;
	right: 0;
	bottom: -1rem;
	width: 90%;
	max-width: 85%;

	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
}
.overlay > .text {
	background: white;
	box-shadow: 0 2px 4px #00000040;
	border-radius: 16px;
	padding: 0.5em 1em;
	width: max-content;
	max-width: 100%;
}
.text > p {
	line-height: 1.3;
}
/* Link image */
.overlay > a > img {
	width: var(--icon-width);
}

h3,
p {
	color: black;
}
p {
	font-size: 1em;
}
h3 {
	font-size: 1.5em;
}

.coming-soon {
	margin-top: 3rem;
	text-align: center;
	font-weight: 600;
}

@media screen and (max-width: 1200px) {
	.grid {
		grid-template-columns: 1fr 1fr 1fr;
		font-size: 1.4vw;
	}
}
@media screen and (max-width: 850px) {
	.grid {
		grid-template-columns: 1fr 1fr;
		font-size: 2.25vw;
	}
	.overlay > .text {
		padding: 0.5rem;
	}
}

@media screen and (max-width: 550px) {
	#speakers {
		--icon-width: 1rem;
	}
}
/* Only show bios for desktop */
@media screen and (min-width: 850px) {
	.image-wrapper:hover > .bio {
		opacity: 1;
	}
	.image-wrapper:hover > .image-speaker {
		filter: brightness(0);
	}
	.image-wrapper:hover > .image-background {
		background: black !important;
	}
}
</style>
