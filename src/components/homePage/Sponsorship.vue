<template>
<div id="sponsors">
	<h2>Our 2020 Sponsors and Partners</h2>
	<div class="sponsor-img" ref="parent">
		<img
			src="@/assets/sponsors2020.png"
			alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"
		/>

		<div
			v-for="(coords, name, i) in coordinates"
			:key="name"
			class="dot"
			:style="{'--dot-order': i, 'left': coords[0], 'top': coords[1]}"
			@mouseover="() => showSponsor(name)" 
			@mouseleave="hideSponsor"
		>
			<div class="dialog-box" v-if="sponsor === name">
				<b>{{name}}</b>
				<br>
				<a :href="info[name].url">{{ info[name].url }}</a>
			</div>
		</div>
	</div>

</div>
</template>

<script>
import sponsorData from "@/content/sponsors.json";

export default {
	name: 'Sponsorship',
	data() {
		return {
			'info': sponsorData,
			'coordinates': {
				'Flik': ['12.3%', '41.3%'],
				'Geotab': ['14.8%', '26.3%'],
				'lleTTonna': ['29.8%', '38.0%'],
				'Flipp': ['36.1%', '24.8%'],
				'FoundersBeta': ['44.7%', '46.3%'],
				'RBC': ['55.0%', '1.60%'],
				'jack.org': ['70.8%', '27.3%'],
				'JobJunxion': ['75.3%', '44.1%'],
			},
			'sponsor': null
		}
	},

	methods: {
		showSponsor(sponsor) {
			this.sponsor = sponsor;
		},
		hideSponsor() {
			this.sponsor = null;
		}
	}
}
</script>

<style scoped>
.sponsor-img {
	position: relative;
}

.sponsor-img > img {
  width: 90%;
  margin: auto;
}

.dot {
	position: absolute;
	width: 1vw;
	height: 1vw;
	border-radius: 50em;

	background: white;
	animation: bounce 5s forwards infinite;
	animation-delay: calc(var(--dot-order) * 200ms);
}

@keyframes bounce {
	from {
		box-shadow: 0px 0px 3px 0px rgba(180, 110, 110, 0.5);
	}
	20% {
		box-shadow: 0px 0px 3px 3px rgba(255, 100, 100, 0.25);
	}
	70% {
		box-shadow: 0px 0px 3px 7px rgba(255, 100, 100, 0.05);
	}
	100% {
		box-shadow: 0px 0px 3px 5px rgba(255, 100, 100, 0);
	}
}

.dialog-box {
	width: max-content;
	padding: 1em;

	background: white;
	border: 1px solid var(--main-color);
	border-radius: 1em;
}
b, a {
	color: grey;
}
</style>