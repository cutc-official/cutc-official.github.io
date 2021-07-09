<template>
  <h2>Featured Events</h2>
  <div class="content">
    <div class="box pink">
      <div class="pinkText">
        <h3>Learn more about</h3>
        <ul>
          <li>
            Technology and how it affects our world in keynotes with the
            president of <b>Shopify</b>, leaders at <b>Facebook</b>, co-founder
            of <b>Sidewalk Labs</b> and many more
          </li>
          <li>
            Diversity and inclusion in tech with our numerous panels with
            industry leaders
          </li>
          <li>
            Entrepreneurship from our panel with Gen Z startup founders with
            prolific investors in Silicon Valley
          </li>
        </ul>
      </div>
      <img id="group" src="@/assets/schedule/group.svg" alt="group" />
    </div>
    <div class="box blue">
      <div class="blueText">
        <h3>Explore tech with</h3>
        <ul>
          <li>Breakout sessions on product, AI/ML, crypto, and sports</li>
          <li>
            Panels on different paths into software engineering, venture capital, and Asia’s tech
            scene
          </li>
        </ul>
      </div>
      <img
        id="astronaut"
        src="@/assets/schedule/astronaut.svg"
        alt="astronaut"
      />
    </div>
    <div class="box green">
      <div class="greenText">
        <h3>Grow your career with</h3>
        <ul>
          <li>
            Design workshops with an <b>Amazon</b> designer to help you build
            your brand
          </li>
          <li>Sessions with recruiters from well-known companies</li>
          <li>
            Career workshops with <b>Wonsulting</b> to help you land your dream
            job
          </li>
        </ul>
      </div>
      <img
        id="illustration"
        src="@/assets/schedule/illustration.svg"
        alt="illustration"
      />
    </div>
  </div>
  <div class="view-more">
    <router-link to="/schedule">View full schedule</router-link>
  </div>
</template>

<script>
export default {
  name: "SchedulePreview",
  props: {
    link: Boolean,
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-gap: 2rem;
  grid-template-areas:
    "pink blue"
    "pink green";
}

.box {
  border-radius: 1rem;
  display: flex;
  width: 100%;
}
.pink {
  background-color: #ed7c77;
  grid-area: pink;
  flex-direction: column;
  justify-content: space-between;
}
.blue {
  background-color: #0094b5;
  grid-area: blue;
  flex-direction: row;
}
.green {
  background-color: #44af69;
  grid-area: green;
  flex-direction: row-reverse;
}

h3 {
  font-weight: bold;
  padding: 1.5rem;
  padding-bottom: 0;
}
ul {
  padding: 0 3rem;
}
li {
  padding: 0.25rem;
}
#astronaut,
#illustration {
  padding: 0 1rem;
  height: 80%;
  margin: auto 0;
}

@media screen and (max-width: 1250px) {
  #astronaut,
  #illustration {
    width: 20%;
    margin: auto;
  }
}
@media screen and (max-width: 850px) {
  .content {
    display: flex;
    flex-direction: column;
  }
  .box {
    flex-direction: column;
  }
  #astronaut,
  #illustration {
    padding-bottom: 1rem;
  }
}
</style>
