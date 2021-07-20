<template>
<div id="sponsors">
	<h2>Our 2021 Sponsors and Partners</h2>
	<div class="mobile">
		<a
			v-for="(info, sponsor) in sponsors"
			:key="sponsor"
			:href="info.link"
			:class="info.class"
			target="_blank"
		>
			<img :src="getImage(sponsor)" :alt="sponsor">
		</a>
	</div>
	<div class="desktop">
		<img src="@/assets/sponsors/desktop.png" :alt="Object.keys(sponsors).join(', ')"/>
		<div
			v-for="(info, name, i) in sponsors"
			:key="name"
			class="dot"
			:style="{'--dot-order': i, left: info.dot[0], top: info.dot[1]}">
		</div>

		<a
			v-for="(info, name) in sponsors"
			:key="name"
			class="link"
			:style="{
				left: info.dtCoords[0], 
				top: info.dtCoords[1], 
				width: width[info.class],
				height: height[info.class]
			}"
			:href="info.link"
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
			sponsors: sponsorData,
			width: {
				gold: "13%",
				silver: "11%",
				bronze: "9%",
				partner: "9%"
			},
			height: {
				gold: "11%",
				silver: "10%",
				bronze: "8%",
				partner: "8%"
			}
		}
	},
	methods: {
		getImage(name) {
			try {
				return require(`@/assets/sponsors/${name}.png`);
			} catch (e) {
				// throw Error(`pic does not exist: ${name}`);
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