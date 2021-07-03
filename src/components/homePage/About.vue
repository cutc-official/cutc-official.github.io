<template>
<div class="slider" style="--animationSpeed: 14s; --slideWidth: 200px; --gradientWidth: 100px; --logoWH: 88px" :style="{'--numOfLogos': logos.length}">
	<div class="slide-track">
		<!-- loop twice so there's logos to cover the end -->
    <div
      class="slide"
      v-for="logo in logos"
      :key="logo"
    >
      <img :src="getImage(logo)" class="logo" :alt="logo + ' logo'" />
    </div>
    <div
      class="slide"
      v-for="logo in logos"
      :key="logo"
    >
      <img :src="getImage(logo)" class="logo" :alt="logo + ' logo'" />
    </div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			logos: ["amazon", "facebook", "github", "google", "notion", "rbc", "shopify", "stanford", "ycombinator"]
		};
	},
	methods: {
		getImage(logo) {
			try {
				// speaker name is the exact same as the file path in speaker assets
				return require(`@/assets/about/${logo}.png`);
			} catch (e) {
				throw Error(`pic does not exist: ${logo}`);
				// image placeholder when name does not match the filename of a headshot
			}
		}
	}
}
</script>

<style scoped>

/* shrink logo and gradient width on mobile */
@media screen and (max-width: 850px) {
  .slider {
    --slideWidth: 104px !important;
    --gradientWidth: 50px !important;
    --logoWH: 64px !important;
  }
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(var(--slideWidth) * var(--numOfLogos) * -1));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(var(--slideWidth) * var(--numOfLogos) * -1));
  }
}

.slider {
  background: white;
  height: var(--logoWH);
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradientWidth);
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll var(--animationSpeed) linear infinite;
          animation: scroll var(--animationSpeed) linear infinite;
  display: flex;
  width: calc(var(--slideWidth) * var(--numOfLogos) * 2);
}
.slider .slide {
  height: var(--logoWH);
  width: var(--slideWidth);
	display: flex;
	align-items: center;
}

.logo {
  width: var(--logoWH);
  height: 100%;
}
</style>