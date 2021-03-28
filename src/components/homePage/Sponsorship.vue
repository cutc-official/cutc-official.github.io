<template>
<div id="sponsors">
	<h2>Our 2020 Sponsors and Partners</h2>
	<div class="sponsor-img" ref="parent">
		<img
			src="@/assets/sponsors2020.png"
			alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"
		/>

		<a
			v-for="(coords, name, i) in coordinates"
			:key="name"
			class="dot"
			:style="{'--dot-order': i, 'left': coords[0], 'top': coords[1]}"
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
			'coordinates': {
				'Flik': ['13.8%', '41.2%'],
				'Geotab': ['16.5%', '26%'],
				'lleTTonna': ['33.2%', '37.8%'],
				'Flipp': ['40.1%', '24.6%'],
				'FoundersBeta': ['49.8%', '46.1%'],
				'RBC': ['61.3%', '1.4%'],
				'jack.org': ['78.6%', '27.1%'],
				'JobJunxion': ['83.7%', '43.9%'],
			}
		}
	},
}
</script>

<style scoped>
.sponsor-img {
	position: relative;
}

.sponsor-img > img {
  width: 100%;
  margin: auto;
}

.dot {
	position: absolute;
	width: 1vw;
	height: 1vw;
	border-radius: 50em;
	cursor: pointer;

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