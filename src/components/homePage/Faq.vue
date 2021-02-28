<template>
  <div id="faq">
    <h2 class="header">Ask us anything</h2>
    <div class="content">
      <div class="box">
        <div class="banner">
          <div class="box-header">{{Object.keys(questions)[0]}}</div>
        </div>
        <div
          class="questions"
          v-for="question in questions[Object.keys(questions)[0]]"
          :key="question"
        >
          <button @click="show($event,0)" class="accordion">
            <div
              v-bind:class="question.answer === lastAccordion && currentBox === 0 ? 'arrow-active': 'arrow-right'"
            ></div>
            {{question.question}}
          </button>
          <div class="p-content">
            <p>{{question.answer}}</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="banner">
          <div class="box-header">{{Object.keys(questions)[1]}}</div>
        </div>
        <div
          class="questions"
          v-for="question in questions[Object.keys(questions)[1]]"
          :key="question"
        >
          <button @click="show($event,1)" class="accordion">
            <div
              v-bind:class="question.answer === lastAccordion  && currentBox === 1? 'arrow-active': 'arrow-right'"
            ></div>
            {{question.question}}
          </button>
          <div class="p-content">
            <p>{{question.answer}}</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="banner">
          <div class="box-header">{{Object.keys(questions)[2]}}</div>
        </div>
        <div
          class="questions"
          v-for="question in questions[Object.keys(questions)[2]]"
          :key="question"
        >
          <button @click="show($event,2)" class="accordion">
            <div
              v-bind:class="question.answer === lastAccordion  && currentBox === 2? 'arrow-active': 'arrow-right'"
            ></div>
            {{question.question}}
          </button>
          <div class="p-content">
            <p>{{question.answer}}</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="banner">
          <div class="box-header">{{Object.keys(questions)[3]}}</div>
        </div>
        <div
          class="questions"
          v-for="question in questions[Object.keys(questions)[3]]"
          :key="question"
        >
          <button @click="show($event,3)" class="accordion">
            <div
              v-bind:class="question.answer === lastAccordion  && currentBox === 3 ? 'arrow-active': 'arrow-right'"
            ></div>
            {{question.question}}
          </button>
          <div class="p-content">
            <p>{{question.answer}}</p>
          </div>
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
      lastAccordion: "",
      currentBox: null
    };
  },
  methods: {
    show: function(event, box) {
      // close any accordions that's open first
      let accordions = document.getElementsByClassName("accordion");
      for (let element of accordions) {
        element.nextElementSibling.style.maxHeight = null;
      }
      let content = event.target.nextElementSibling;
      // accordion is open, we need to close it
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        //accordion is closed
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.currentBox = box;
      this.lastAccordion = content.querySelector("p").textContent;
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
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
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
  margin-right: 0.5rem;
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 1.5rem solid gray;
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
</style>
