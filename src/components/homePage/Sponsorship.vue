<template>
<div id="sponsors">
	<h2>Our 2021 Sponsors and Partners</h2>
	<div class="img-group">
		<a target="_blank" href="https://www.geotab.com"     class="gold">   <img src="@/assets/sponsors/geotab.png"    alt="Geotab"></a>
		<a target="_blank" href="https://www.shopify.com/"   class="silver"> <img src="@/assets/sponsors/shopify.png"   alt="Shopify"></a>
		<a target="_blank" href="https://www.accenture.com/" class="silver"> <img src="@/assets/sponsors/accenture.png" alt="Accenture"></a>
		<a target="_blank" href="http://flipp.com/"          class="bronze"> <img src="@/assets/sponsors/flipp.png"     alt="Flipp"></a>
		<a target="_blank" href="http://copysmith.ai/"       class="partner"><img src="@/assets/sponsors/copysmith.png" alt="Copysmith"></a>
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
		}
	}
}
</script>

<style scoped>
#sponsors {
	--total-width: 30rem;
}

img {
	width: 100%;
}

.img-group {
	width: var(--total-width);
	max-width: 100%;
	margin: auto;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
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

</style>