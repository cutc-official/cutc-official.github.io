<template>
  <div class="background" :style="{'--type-color': colors[type]}">
    <div class="strip"></div>
    <div class="content">
      <div class="top-bar">
        <button>
          <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <img src="@/assets/schedule/addButton.svg" alt="Add to Calendar" />
            <div class="dropdown" v-if="showDropdown">
              <div class="child" v-for="calendar in calendars" :key="calendar.name">
                <img class="icon" :src="calendar.icon" />
                <div>{{calendar.name}}</div>
              </div>
            </div>
          </div>
        </button>
        <h3>{{ title }}</h3>
        <div class="top-info">
          <div class="top-info-section">
            <img src="@/assets/schedule/clock.svg" alt="Time" />
            <p>{{ timestamp }}</p>
          </div>
          <div class="top-info-section">
            <img src="@/assets/schedule/location.svg" alt="Location" />
            <p>{{ location }}</p>
          </div>
          <div class="top-info-section">
            <p v-for="tag in tags" :key="tag" class="tag">{{ tag }}</p>
          </div>
        </div>
      </div>
      <p>{{ description }}</p>
      <div class="speakers">
        <div v-for="(speaker,index) in speakers" :key="speaker">
          <div class="image-container" @mouseleave="popUp = -1" @mouseover="open(index)">
            <transition name="fade">
              <div class="dialog" v-if="popUp===index">
                <div class="name">{{speaker}}</div>
                <div class="company">{{speakerInfo[speaker]["title"].split("@")[1]}}</div>
                <div class="rectangle"></div>
              </div>
            </transition>
            <img class="image" :src="getImage(speaker)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Schedule from "@content/schedule.json";
import Speakers from "@/content/speakers.json";
import GoogleCalendar from "@/assets/schedule/GoogleCalendar.png";
import OutlookCalendar from "@/assets/schedule/OutlookCalendar.png";
import AppleCalendar from "@/assets/schedule/AppleCalendar.png";
export default {
  name: "ScheduleTile",
  props: {
    title: String,
    description: String,
    type: {
      default: "",
      type: String
    },
    location: String,
    timestamp: String,
    tags: Array,
    speakers: Array
  },

  data() {
    return {
      colors: {
        "topic 1": "#8394F2",
        "topic 2": "#F57A75",
        "topic 3": "#17ADCE",
        "topic 4": "#F9AFAB",
        "": "#44AF69" // Misx
      },
      popUp: -1,
      speakerInfo: Speakers,
      showDropdown: false,
      calendars: [
        { name: "Google Calendar", icon: GoogleCalendar },
        { name: "Outlook", icon: OutlookCalendar },
        { name: "Apple Calendar", icon: AppleCalendar }
      ]
    };
  },
  methods: {
    getImage(speaker) {
      try {
        return require("@/assets/speakers/" +
          this.speakerInfo[speaker]["image"]);
      } catch (e) {
        // throw Error(`pic does not exist: ${pic}`);
      }
    },
    open(popped) {
      this.popUp = popped;
    }
  }
};
</script>

<style scoped>
.background {
  margin: 1rem;
  border: 1px solid grey;
  border-radius: 16px;
}

.strip {
  border-radius: 16px 0 0 16px;
  position: absolute;
  z-index: 5;
  height: 32%;
  margin-right: 1rem;
  width: 1rem;
  background-color: var(--type-color);
}

.content {
  padding: 1rem 1rem 1rem 1.5rem;
  color: black;
}

/* .top-bar {} */
.dialog {
  position: absolute;
  top: 13rem;
  left: 3rem;
  z-index: 5;
  padding: 0.2rem 1% 1% 0.5rem;
  width: max-content;
  max-width: 100%;
  color: black;
  background: #b3160d;
}
.dropdown {
  position: absolute;
  left: 88%;
  border: 0.2px gray solid;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: left;
  z-index: 10;
  background: white;
}
.child {
  display: flex;
  align-items: center;
  justify-content: start;
}

.icon {
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.5rem;
}
.rectangle {
  width: 0.75rem;
  height: 1.5rem;
  position: absolute;
  background: #b3160d;
  transform: rotate(45deg);
  top: 70%;
  left: 10%;
  z-index: -1;
}
.top-bar > button {
  float: right;
  background: none;
  border: none;
}

.top-info {
  display: flex;
  flex-wrap: wrap;
}
.top-info > :not(:last-child) {
  margin-right: 2rem;
}

.top-info-section {
  display: flex;
  flex-wrap: wrap;
}
.top-info-section > :not(:last-child) {
  margin-right: 0.5rem;
}
/* Icons */
.top-info-section > img {
  width: 0.7rem;
}

.tag {
  padding: 0.25rem 1rem;
  border-radius: 50rem;
  background: var(--type-color);

  color: white;
  font-size: 0.8rem;
}
.image-container {
  width: 3em;
  height: 3em;
  overflow: hidden;
  border-radius: 50%;
}
.image {
  width: 100%;
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