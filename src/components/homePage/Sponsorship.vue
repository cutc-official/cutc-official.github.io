<template>
<div id="sponsors">
	<h2>Our 2021 Sponsors and Partners</h2>
	<div class="mobile">
		<a target="_blank" href="https://www.huawei.com/en/" class="gold">   <img src="@/assets/sponsors/huawei.png"    alt="Huawei"></a>
		<a target="_blank" href="https://www.bdo.com"        class="gold">   <img src="@/assets/sponsors/bdo.png"       alt="BDO"></a>
		<a target="_blank" href="https://www.geotab.com"     class="gold">   <img src="@/assets/sponsors/geotab.png"    alt="Geotab"></a>
		<a target="_blank" href="https://www.shopify.com/"   class="silver"> <img src="@/assets/sponsors/shopify.png"   alt="Shopify"></a>
		<a target="_blank" href="https://www.accenture.com/" class="silver"> <img src="@/assets/sponsors/accenture.png" alt="Accenture"></a>
		<a target="_blank" href="http://flipp.com/home"      class="bronze"> <img src="@/assets/sponsors/flipp.png"     alt="Flipp"></a>
		<a target="_blank" href="http://copysmith.ai/"       class="partner"><img src="@/assets/sponsors/copysmith.png" alt="Copysmith"></a>
	</div>
	<div class="desktop">
		<img src="@/assets/sponsors/desktop.png" alt="Huawei, BDO, Geotab, Shopify, Accenture, Flipp, Copysmith"/>
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
			links: sponsorData,
			dotCoordinates: {
				// '': ['13.8%', '41.2%'],
				'Accenture': ['23.0%', '23.5%'],
				'Huawei':    ['37.1%', '10.5%'],
				'Flipp':     ['38.8%', '35.5%'],
				'Copysmith': ['49.8%', '44.6%'],
				'Geotab':    ['51.3%', '2%'],
				'BDO':       ['60.1%', '10.0%'],
				'Shopify':   ['78.6%', '21.1%'],
				// '': ['83.7%', '43.9%'],
			},
			linkCoordinates: {
				// '':       {left: '6.80%', top: '40.2%', width: '10%',   height: '8%'},
				'Accenture': {left: '14%',   top: '21.0%', width: '11%',   height: '10%'},
				'Huawei':    {left: '27.0%', top: '8.5%',  width: '13%',   height: '11%'},
				'Flipp':     {left: '31.6%', top: '34.0%', width: '9%',    height: '8%'},
				'Copysmith': {left: '43.5%', top: '43%',   width: '9%',    height: '8%'},
				'Geotab':    {left: '42.5%', top: '0',     width: '13.5%', height: '11%'},
				'BDO':       {left: '57.5%', top: '8.5%',  width: '13.5%', height: '11%'},
				'Shopify':   {left: '71.4%', top: '19.0%', width: '12%',   height: '10%'},
				// '':       {left: '78.1%', top: '42.9%', width: '12%',   height: '7%'},
			}
		}
	}
}
</script>

<style scoped>
/* DESKTOP CSS */
img {
	width: 100%;
	margin: auto;
}

.desktop {
	position: relative;
}
.link {
	position: absolute;
	/* border: 1px solid grey; */
}

.dot {
	position: absolute;
	width: 1vw;
	height: 1vw;
	border-radius: 50em;

	background: white;
	animation: breathe 4s infinite;
	animation-delay: calc(var(--dot-order) * 401ms);
}

@keyframes breathe {
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

.mobile {
	display: none;
}

/* Mobile CSS */
@media screen and (max-width: 550px) {
	#sponsors {
		--total-width: 30rem;
	}
	.desktop {
		display: none;
	}

	.mobile {
		width: var(--total-width);
		max-width: 100%;
		margin: auto;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.mobile > a {
		margin-top: .5rem;
		margin-bottom: 0;
		transition: all .3s ease;
	}
	.mobile > a:hover {
		margin-top: 0;
		margin-bottom: .5rem;
	}

	.gold {
		width: var(--total-width);
		max-width: 100%;
	}

	.silver {
		width: calc(var(--total-width) * 0.48);
		max-width: 48%;
	}

	.bronze {
		width: calc(var(--total-width) * 0.45);
		max-width: 45%;
	}

	.partner {
		width: calc(var(--total-width) * 0.43);
		max-width: 43%;
	}

	.center {
		margin: auto;
	}
}
</style>