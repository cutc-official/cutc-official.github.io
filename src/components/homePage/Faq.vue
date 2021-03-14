<template>
  <div id="faq">
    <h2>Ask us anything</h2>
    <div class="content" :class="{'content-multiple': questions.length > 1}">
      <div class="box" v-for="(questionSet, groupTitle) in questions" :key="groupTitle" :class="{'box-multiple': questions.length > 1}">
        <div v-if="groupTitle" class="banner">
          <div class="box-header">{{groupTitle}}</div>
        </div>
        <div class="questions" v-for="qa in questionSet" :key="qa">
          <button @click="show(qa.question)" class="question">
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
      <a class="ask button" href="mailto:info@cutc.ca">Send us a question!</a>
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
    show(question) {
      if (this.currentQuestion == question) this.currentQuestion = "";
      else this.currentQuestion = question;
    }
  }
};
</script>

<style scoped>
#faq {
  line-height: 24px;
  letter-spacing: 0.2px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.content-multiple {
  justify-content: space-evenly;
}

.button-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ask {
  margin-top: 2rem;
  font-weight: 500;
  color: white;
  width: 13rem;
  height: 3rem;
  background: #e84545;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  display: block;
  text-decoration: none;
  line-height: 3rem;
}
.box {
  margin-top: 1rem;
}
.box-multiple {
  width: 45%;
}

.banner {
  padding-left: 0.5rem;
  background: #e84545;
  border-radius: 3px;
}
.box-header {
  font-weight: 600;
  font-size: 24px;
  padding: .2em;
}
button.question {
  overflow-wrap: break-word;
  background: none;
  border: none;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  font-weight: 600;
}
.p-content {
  padding: 0rem 2rem;
  overflow: hidden;
  font-size: 16px;
  color: black;
}
button {
  font-family: inherit;
}

.arrow-right {
  margin-right: 0.5rem;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 1.1rem solid #C4C4C4;
}
.arrow-active {
  transform: matrix(0.02, 1, -1, 0.02, 0, 0);
}

@media screen and (max-width: 850px) {
  .header {
    margin-left: 0.8rem;
    font-size: 1.5rem;
  }
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
