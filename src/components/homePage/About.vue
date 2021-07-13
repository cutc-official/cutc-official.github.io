<template>
  <div class="slider-wrapper">
    <div
      class="slider"
      style="--animationDuration: 17s; --gradientWidth: 100px; --logoWH: 56px; --textSize: 1.5rem; --animationDirection: normal; --spacing: 1.5rem"
    >
      <div class="slide-track">
        <template v-for="n in 3" :key="n">
          <div class="slide" v-for="metric in metrics" :key="metric">
            <p class="slide-content">{{ metric }}</p>
          </div>
        </template>
      </div>
    </div>
    <div
      class="slider"
      style="--animationDuration: 14s; --gradientWidth: 100px; --logoWH: 56px; --animationDirection: reverse; --spacing: 1.5rem"
    >
      <div class="slide-track">
        <template v-for="n in 3" :key="n">
          <div class="slide" v-for="logo in logos" :key="logo">
            <img :src="getImage(logo)" class="logo" :alt="logo + ' logo'" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "amazon",
        "facebook",
        "github",
        "google",
        "notion",
        "rbc",
        "shopify",
        "stanford",
        "ycombinator",
      ],
      metrics: [
        "21st conference",
        "250+ featured industry leaders",
        "60+ speakers",
        "10K+ students reached",
        "30+ companies represented",
      ],
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
    },
  },
};
</script>

<style scoped>
/* shrink logo and gradient width on mobile */
@media screen and (max-width: 850px) {
  .slider {
    --slideWidth: 80px !important;
    --gradientWidth: 50px !important;
    --logoWH: 40px !important;
    --textSize: 1rem !important;
    --spacing: 1rem !important;
  }
}

.slider:first-of-type {
  margin-bottom: 1rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* since we're tripling the elements in the DOM, translate a negative third of that */
    transform: translateX(-33.33%);
  }
}
@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
}

.slider {
  height: var(--logoWH);
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  color: black;
}

.slider::before,
.slider::after {
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
  -webkit-animation: scroll var(--animationDuration) linear infinite
    var(--animationDirection);
  animation: scroll var(--animationDuration) linear infinite
    var(--animationDirection);
  display: flex;
  position: absolute;
}

.slide-track * {
  margin-right: var(--spacing);
}

.slider .slide {
  height: var(--logoWH);
  display: flex;
  align-items: center;
}

.slide-content {
  font-size: var(--textSize);
  font-weight: 500;
  width: max-content;
}

.logo {
  width: var(--logoWH);
  height: 100%;
}
</style>
