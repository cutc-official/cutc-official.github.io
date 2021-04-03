<template>
<div id="sponsors">
	<h2>Our 2020 Sponsors and Partners</h2>

	<img v-if="isMobile" src="@/assets/sponsors2020-mobile.png" alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion">

	<div v-else class="sponsor-img" ref="parent">
		<img
			src="@/assets/sponsors2020.png"
			alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"
		/>

		<div
			v-for="(coords, name, i) in dotCoordinates"
			:key="name"
			class="dot"
			:style="{'--dot-order': i, 'left': coords[0], 'top': coords[1]}">
		</div>

		<a
			v-for="(coords, name) in linkCoordinates"
			:key="name"
			class="link"
			:style="{'left': coords[0], 'top': coords[1]}"
			:href="links[name]"
			target="_blank">
		</a>

	</div>
</div>
</template>

<script>
import sponsorData from "@/content/sponsors.json";

export default {
	name: 'Sponsorship',
	data() {
		return {
			'links': sponsorData,
			'dotCoordinates': {
				'Flik': ['13.8%', '41.2%'],
				'Geotab': ['16.5%', '26%'],
				'lleTTonna': ['33.2%', '37.8%'],
				'Flipp': ['40.1%', '24.6%'],
				'FoundersBeta': ['49.8%', '46.1%'],
				'RBC': ['61.3%', '1.4%'],
				'jack.org': ['78.6%', '27.1%'],
				'JobJunxion': ['83.7%', '43.9%'],
			},
			'linkCoordinates': {
				'Flik': ['6.8%', '40.2%'],
				'Geotab': ['14.2%', '25%'],
				'lleTTonna': ['31%', '36%'],
				'Flipp': ['38.9%', '22.6%'],
				'FoundersBeta': ['42.7%', '44.3%'],
				'RBC': ['51.3%', '1.4%'],
				'jack.org': ['70.2%', '26.1%'],
				'JobJunxion': ['79.1%', '41.9%'],
			},
			'isMobile': false,
		}
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth <= 550;
		},
	},
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	}
}
</script>

<style scoped>
.sponsor-img {
	position: relative;
}

img {
	width: 100%;
	margin: auto;
}

.link {
	position: absolute;
	width: 8vw;
	height: 6vw;
	/* border: 1px solid black; */
}

.dot {
	position: absolute;
	width: 1vw;
	height: 1vw;
	border-radius: 50em;

	background: white;
	animation: bounce 4s infinite;
	animation-delay: calc(var(--dot-order) * 401ms);
}

@keyframes bounce {
	from {
		box-shadow: 0px 0px 3px 0px rgba(180, 110, 110, 0);
	}
	20% {
		box-shadow: 0px 0px 3px 3px rgba(255, 100, 100, 0.4);
	}
	to {
		box-shadow: 0px 0px 3px 9px rgba(255, 100, 100, 0);
	}
}
</style>