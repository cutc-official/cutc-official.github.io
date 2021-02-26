<template>
  <div class="box">
    <div class="banner">
      <div class="header">{{questionType}}</div>
    </div>
    <div class="questions" v-for="question in questions[questionType]" :key="question">
      <button @click="show" class="accordion">
        <div v-bind:class="arrowClass"></div>
        {{question.question}}
      </button>
      <div class="content">
        <p>{{question.answer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Questions from "../../content/faq.json";

export default {
  name: "FaqSubSection",
  props: { questionType: String },
  data() {
    return {
      questions: Questions,
      lastAccordion: "",
      arrowClass: "arrow-right"
    };
  },
  methods: {
    show: function(event) {
      // close any accordions that's open first

      let accordions = document.getElementsByClassName("accordion");
      for (let element of accordions) {
        element.nextElementSibling.style.maxHeight = null;
        //this.arrowClass = "arrow-right";
      }
      let content = event.target.nextElementSibling;
      // accordion is open, we need to close it
      if (content.style.maxHeight) {
        // originally this condition was content.style.maxHeight || the last accordion but there was a bug which was if I closed the current accordion and tried to reopen it, it wouldn't work
        content.style.maxHeight = null;
        //this.arrowClass = "arrow-right";
      } else {
        //accordion is closed
        content.style.maxHeight = content.scrollHeight + "px";
        //this.arrowClass = "arrow-active";
      }
      this.lastAccordion = content;
    }
  }
};
</script>


<style scoped>
.box {
  margin-top: 1rem;
  width: 45%;
}
.banner {
  padding-left: 0.5rem;
  background: #e84545;
  border-radius: 3px;
}
.header {
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
  background: var(--nav-color);
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
.content {
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
  .content {
    font-size: 12px;
  }
}
</style>