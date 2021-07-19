<template>
  <div id="hero">
    <div class="building" v-cloak>
      <countdown />
      <img src="@/assets/misc/hero.svg" id="cutc-building-image" />
    </div>
    <div class="spacer"></div>
    <span class="hero-info">
      <div class="hero-text">
        <h1 class="hero-title">Canadian Undergraduate Technology Conference</h1>
        <h3 class="h3-date">
          <strong class="date">Jul 24-25, 2021</strong>
        </h3>
        <h3 class="event-descr">A free virtual event open to everyone worldwide</h3>
      </div>
      <register-button />
    </span>
  </div>
</template>

<script>
import Countdown from "@/components/homePage/Countdown.vue";
import RegisterButton from "@/components/general/RegisterButton.vue";

export default {
  name: "Hero",
  components: {
    Countdown,
    RegisterButton
  },
  data: () => ({
    email: "",
    signup: true
  })
};
</script>

<style scoped>
#hero {
  display: flex;
  align-items: center;
  padding: 4rem var(--splash-page-inset) 8rem;
}
@media screen and (max-width: 850px) {
  #hero {
    flex-direction: column;
  }
}

.spacer {
  margin: 1rem;
}
@media screen and (max-width: 850px) {
  .spacer {
    margin: 0.5rem;
  }
}
@media screen and (max-height: 850px) {
  .hero-title,
  .event-descr {
    font-size: 85%;
  }
  .date {
    font-size: 42%;
  }
  .hero-title {
    margin-bottom: 0 !important ;
  }
  .hero-text {
    margin-bottom: 0.5em !important;
  }
}

@media screen and (max-height: 570px) {
  .hero-title,
  .event-descr {
    font-size: 70%;
  }
  .date {
    font-size: 35%;
    margin: 0;
  }
  .hero-title,
  .hero-text,
  .h3-date {
    margin: 0 !important ;
  }
}

.hero-text {
  margin-bottom: 1.5rem;
}

.hero-title {
  margin-bottom: 1rem;
}

.hero-info {
  flex-basis: 100%;
  flex: 1;
}
.building {
  position: relative;
  height: min-content;
  flex-basis: 100%;
  flex: 1;
}
#cutc-building-image {
  max-height: 50vh;
  width: 100%;
  justify-self: end;
}

.slogan {
  font-size: 2em;
  font-weight: 600;
  color: white;
  margin: 0 !important;
}
@media screen and (max-width: 850px) {
  .slogan {
    font-size: 1.5em;
  }
}

form {
  display: flex;
  position: relative;
  justify-content: flex-start;
  margin: 1em 0;
}

.email-input {
  display: flex;
  width: 100%;
}

button {
  height: 100%;
  width: 60px;
  border: none;
  background-color: #a3241d;
  border-top-right-radius: 45%;
  border-bottom-right-radius: 45%;
  margin: 0;
}
button:focus {
  outline: none;
}

input[type="email"] {
  width: 95%;
  max-width: 400px;
  border: 1px solid #a3241d;
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 1rem;
  margin: 0;
}
input:focus {
  outline: none;
}

a {
  font-weight: 500;
  display: block;
  margin-bottom: 2em;
  color: white;
}
</style>
