<template>
  <div id="faq">
    <h2 class="header">Ask us anything</h2>
    <div class="content">
      <FaqSubSection
        v-for="header in Object.keys(questions)"
        :key="header"
        v-bind:questionType="header"
      />
    </div>
    <div class="button-holder">
      <button class="ask">Send us a question!</button>
    </div>
  </div>
</template>

<script>
import Questions from "../../content/faq.json";
import FaqSubSection from "./FaqSubSection.vue";

export default {
  name: "Faq",
  components: { FaqSubSection },
  data() {
    return {
      questions: Questions
    };
  }
};
</script>

<style scoped>
#faq {
  margin: 1em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.2px;
  color: #000000;
}
.header {
  margin-left: 2rem;
}
.content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.button-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ask {
  margin-top: 2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 22px;
  color: white;
  width: 13rem;
  height: 3rem;
  background: #e84545;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
@media screen and (max-width: 850px) {
  .header {
    margin-left: 0.8rem;
    font-size: 1.5rem;
  }
  .content {
    width: 100%;
  }
}
</style>
