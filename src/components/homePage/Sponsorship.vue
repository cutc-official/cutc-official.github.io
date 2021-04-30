<template>
<div id="sponsors">
	<h2>Our 2020 Sponsors and Partners</h2>
	<div class="sponsor-img">
		<a href="https://www.geotab.com"><img src="@/assets/sponsors/geotab.png" alt="Geotab"></a>
		<a href="https://www.shopify.com/"><img src="@/assets/sponsors/shopify.png" alt="Shopify" class="mini left"></a>
		<a href="https://www.accenture.com/"><img src="@/assets/sponsors/accenture.png" alt="Accenture" class="mini right"></a>
		<a href="http://flipp.com/"><img src="@/assets/sponsors/flipp.png" alt="Flipp" class="mini center"></a>
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

.sponsor-img {
	width: var(--total-width);
	max-width: 100%;
	margin: auto;
}

.mini {
	width: calc(var(--total-width) / 2);
	max-width: 50%;
	box-sizing: border-box;
	padding: 1rem;
}
.left {
	padding-left: 0;
}
.right {
	padding-right: 0;
}
.center {
	box-sizing: content-box;
	padding-left: 25%;
}
</style>