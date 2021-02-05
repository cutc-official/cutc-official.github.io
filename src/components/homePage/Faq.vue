<template>
  <div id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="questions" v-for="question in questions['questions']" :key="question">
      <button v-on:click="show" class="accordion">{{question.question}}</button>
      <div class="content">
        <p>{{question.answer}}</p>
      </div>
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
      lastAccordion: ""
    };
  },
  methods: {
    show: function(event) {
      // close any accordions that's open first
      let accordions = document.getElementsByClassName("accordion");
      for (let element of accordions) {
        element.nextElementSibling.style.maxHeight = null;
      }
      let content = event.target.nextElementSibling;
      // accordion is open, we need to close it
      if (content === this.lastAccordion || content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        //accordion is closed
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.lastAccordion = content;
    }
  }
};
</script>

<style scoped>
#faq {
  margin: 1em;
  background: var(--nav-color);
}
button.accordion {
  overflow-wrap: break-word;
  width: 100%;
  background-color: rgb(112, 7, 7);
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}
.content {
  overflow-wrap: break-word;
  padding: 0rem 2rem;
  border-left: 1px;
  border-right: 1px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}
</style>
