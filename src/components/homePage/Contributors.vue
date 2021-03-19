<template>
  <div id="contributors">
    <h1>Created with love in 🇨🇦 by</h1>
    <div class="gallery">
      <div v-for="(member,index) in members.members" :key="member.picture">
        <a @click="open(index)" style="  text-decoration: none;">
          <div class="dialog" v-if="popUp===index">
            <div class="name">{{member.picture.slice(0,member.picture.indexOf("."))}}</div>
            <div class="emoji">{{member.emoji}}</div>
            <div class="position">{{member.position}}</div>
          </div>
          <img class="image" :src="require(`@/assets/contributors/${member.picture}`)" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Members from "../../assets/contributors/names";
export default {
  name: "Contributors",
  data() {
    return { members: Members, popUp: -1 };
  },
  methods: {
    open: function(popped) {
      this.popUp = popped;
      console.log(popped);
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
}
.image {
  max-height: 5rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
.dialog {
  padding-top: 0.2rem;
  padding-left: 0.5rem;
  width: 8rem;
  height: 3.5rem;
  color: black;
  background: #b3160d;
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