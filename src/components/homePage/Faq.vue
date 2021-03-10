<template>
  <div id="faq">
    <h2 class="header">Ask us anything</h2>
    <div class="content">
      <div class="box" v-for="(questionSet, groupTitle) in questions" :key="groupTitle">
        <div class="banner">
          <div class="box-header">{{groupTitle}}</div>
        </div>
        <div class="questions" v-for="qa in questionSet" :key="qa">
          <button @click="show($event, qa.question)" class="accordion">
            <div :class="{'arrow-active': qa.question == currentQuestion, 'arrow-right': true}"></div>
            {{qa.question}}
          </button>
          <transition name="fadeHeight">
            <div v-if="qa.question == currentQuestion">
              <p class="p-content">{{qa.answer}}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="button-holder">
      <button class="ask">Send us a question!</button>
    </div>
  </div>
</template>

<script>
import Questions from "../../content/faq.json";

export default {
  name: "Faq",
  data() {
    return {
      questions: Questions,
      currentQuestion: ""
    };
  },
  methods: {
    show(_, question) {
      if (this.currentQuestion == question) this.currentQuestion = "";
      else this.currentQuestion = question;
    }
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
  color: black;
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
  line-height: 22px;
  color: white;
  width: 13rem;
  height: 3rem;
  background: #e84545;
  border-radius: 5px;
  border: none;
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
.box {
  margin-top: 1rem;
  width: 45%;
}
.banner {
  padding-left: 0.5rem;
  background: #e84545;
  border-radius: 3px;
}
.box-header {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  padding: .2em;
  line-height: 28px;
  letter-spacing: 0.07px;
  color: #ffffff;
}
button.accordion {
  overflow-wrap: break-word;
  width: 100%;
  background: white;
  border: none;
  outline: none;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
}
.panel {
  display: flex;
}
.p-content {
  overflow-wrap: break-word;
  padding: 0rem 2rem;
  border-left: 1px;
  border-right: 1px;
  overflow: hidden;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.arrow-right {
  margin-right: 0.5rem;
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 1.5rem solid gray;
}
.arrow-active {
  transform: matrix(0.02, 1, -1, 0.02, 0, 0);
}
@media screen and (max-width: 850px) {
  .box {
    width: 90%;
  }
  .p-content {
    font-size: 12px;
  }
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.5s;
  max-height: 100vh;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
  overflow: hidden;
}
</style>
