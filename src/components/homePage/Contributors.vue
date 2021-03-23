<template>
  <div id="contributors">
    <h1>Created with love in 🇨🇦 by</h1>
    <div class="gallery">
      <div class="parent" v-for="(member,index) in members" :key="member.name">
        <a @click="open(index)" style="text-decoration: none;">
          <div class="dialog" v-if="popUp===index">
            <div class="name">{{member.name}}</div>
            <div class="emoji">{{member.emoji}}</div>
            <div class="position">{{member.position}}</div>
            <img class="rectangle" src="../../assets/Rectangle.svg" />
          </div>
          <div v-if="'image' in member">
            <img class="image" :src="require(`@/assets/contributors/${member.image}`)" />
            <!-- <img class="image" :src="require(`@/assets/contributors/${member.image}`)" /> -->
          </div>
          <div v-else>
            <img class="image" src="../../assets/contributors/anon.png" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Members from "../../content/contributors.json";
export default {
  name: "Contributors",
  data() {
    return { members: Members, popUp: -1 };
  },
  methods: {
    open: function(popped) {
      this.popUp = popped;
      console.log(this.popUp);
    }
  }
};
</script>

<style scoped>
#contributors {
  color: black;
  margin-top: 5rem;
}
.gallery {
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
}
.parent {
  position: relative;
}
.image {
  max-height: 5rem;
  margin-right: 3.5rem;
  margin-bottom: 1rem;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
.dialog {
  position: absolute;
  top: -2rem;
  z-index: 1;
  padding: 0.2rem 15% 3% 0.5rem;
  width: auto;
  height: auto;
  color: black;
  background: #b3160d;
}
.rectangle {
  position: absolute;
  bottom: -0.4rem;
}
.name {
  color: white;
  font-weight: bold;
}

.position {
  color: white;
  font-size: 0.8rem;
}
</style>