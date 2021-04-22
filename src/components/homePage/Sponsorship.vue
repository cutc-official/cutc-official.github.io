<template>
<div id="sponsors">
	<h2>Our 2020 Sponsors and Partners</h2>
	<div class="sponsor-img">
		<img v-if="isMobile" src="@/assets/misc/sponsors2020-mobile.png" alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"/>

		<span v-else>
			<img src="@/assets/misc/sponsors2020.png" alt="Flik, Geotab, lleTTonna, Flipp, FoundersBeta, RBC, jack.org, JobJunxion"/>
			<div
				v-for="(coords, name, i) in dotCoordinates"
				:key="name"
				class="dot"
				:style="{'--dot-order': i, 'left': coords[0], 'top': coords[1]}">
			</div>
		</span>

		<a
			v-for="(coords, name) in (isMobile ? linkCoordinatesMobile : linkCoordinatesDesktop)"
			:key="name"
			class="link"
			:style="coords"
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
			'linkCoordinatesDesktop': {
				'Flik':         {left: '6.80%', top: '40.2%', width: '10%',   height: '8%'},
				'Geotab':       {left: '14%',   top: '25.0%', width: '11%',   height: '9%'},
				'lleTTonna':    {left: '32.0%', top: '37.0%', width: '8.3%',  height: '7%'},
				'Flipp':        {left: '39.5%', top: '23.6%', width: '8.5%',  height: '7%'},
				'FoundersBeta': {left: '43.3%', top: '45%',   width: '9%',    height: '7%'},
				'RBC':          {left: '48.5%', top: '0',     width: '15%',   height: '12%'},
				'jack.org':     {left: '70%',   top: '26.1%', width: '11%',   height: '9%'},
				'JobJunxion':   {left: '78.1%', top: '42.9%', width: '12%',   height: '7%'},
			},
			'linkCoordinatesMobile': {
				'RBC':          {left: '0',     top: '0',     width: '100%',  height: '39%'},
				'Geotab':       {left: '0',     top: '43%',   width: '48%',   height: '20%'},
				'Flipp':        {left: '52%',   top: '43%',   width: '48%',   height: '20%'},
				'Flik':         {left: '0',     top: '68%',   width: '31%',   height: '13%'},
				'JobJunxion':   {left: '34%',   top: '68%',   width: '31%',   height: '13%'},
				'jack.org':     {left: '68%',   top: '68%',   width: '31%',   height: '13%'},
				'lleTTonna':    {left: '9%',    top: '85%',   width: '31%',   height: '13%'},
				'FoundersBeta': {left: '60%',   top: '85%',   width: '31%',   height: '13%'},
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
img {
	width: 100%;
	margin: auto;
}

.sponsor-img {
	position: relative;
}
.link {
	position: absolute;
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