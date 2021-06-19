<template>
  <div class="tile" :style="{'--type-color': colors[format]}">
    <div class="strip"></div>
    <div class="content">
      <div class="top-bar">
        <button>
          <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <img src="@/assets/schedule/addButton.svg" alt="Add to Calendar" />
            <div class="calendar" v-if="showDropdown">
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
            <p v-for="tag in topics" :key="tag" class="tag">{{ tag }}</p>
          </div>
        </div>
      </div>
      <p>{{ description }}</p>
    
      <div class="speakers-container">
        <div 
          v-for="(speaker,index) in speakers"
          :key="speaker"
          class="speaker"
          @mouseleave="popUp = -1"
          @mouseover="open(index)"
        >
          <transition name="fade">
            <div class="dialog" v-if="popUp===index">
              <div class="name">{{speaker}}</div>
              <div class="company">{{speakerInfo[speaker].org}}</div>
              <div class="dialog-diamond"></div>
            </div>
          </transition>
          <div class="speaker-img"><img :src="getImage(speaker)"/></div>
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
    format: {
      default: "",
      type: String
    },
    location: String,
    timestamp: String,
    topics: Array,
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
.tile {
  position: relative;
  border: 1px solid grey;
  --b-radius: 16px;
  border-radius: var(--b-radius);
  margin: 1rem;

  display: grid;
  grid-template-columns: var(--b-radius) auto;
}

.strip {
  border-radius: var(--b-radius) 0 0 var(--b-radius);
  height: 100%;
  width: 100%;
  background-color: var(--type-color);
}

.content {
  padding: 1rem;
  color: black;
}

/* .top-bar {} */
.calendar {
  position: absolute;
  right: 0.5rem;
  border: 0.2px gray solid;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: left;
  z-index: 10;
  background: white;
}
.calendar>.child {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.calendar>.child>.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.top-bar > button {
  padding: 0;
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

.speakers-container {
  display: grid;
  --speaker-size: 4rem;
  grid-template-columns: repeat(auto-fit, var(--speaker-size));
  gap: 1rem;
}
.speaker {
  position: relative;
}
.speaker-img {
  width: var(--speaker-size);
  height: var(--speaker-size);
  overflow: hidden;
  border-radius: 50%;
}
.speaker-img>img {
  width: 100%;
}
.speaker>.dialog {
  position: absolute;
  top: -4rem;
  left: 1rem;
  z-index: 1;
  padding: 0.5rem;
  width: max-content;
  color: white;
  background: #b3160d;
}
.dialog-diamond {
  width: 1rem;
  height: 1.5rem;
  position: absolute;
  background: #b3160d;
  transform: rotate(45deg);
  top: 70%;
  left: 10%;
  z-index: -1;
}
.name {
  font-weight: bold;
}
</style>