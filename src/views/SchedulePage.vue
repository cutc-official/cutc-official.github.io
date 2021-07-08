<template>
<div id="schedule">
	<nav-bar/>
	<div class="page">

		<transition name="pop-up">
			<div class="sidebar" v-if="!isMobile || showMobileMenu">
				<h4 class="sidebar-title">Topics</h4>
				<span v-if="displayTopics">
					<label class="container" v-for="i in allTopics" :key="i">{{i}}
						<input type="checkbox" :id="i" :value="i" v-model="checkedTopics">
						<span class="checkmark"/>
					</label>
				</span>
				<div class="sidebar-spacer"/>
				<h4 class="sidebar-title">Format</h4>
				<span v-if="displayFormats">
					<div class="checkbox-row" v-for="i in allFormats" :key="i">
						<input type="checkbox" :id="i" :value="i" v-model="checkedFormats" class="checkbox">
						<div class="dot" :style="{'--format-color': colors[i]}"></div>
						<label for="i" class="checkboxText">{{ i }}</label>
					</div>
				</span>
			</div>
		</transition>
		<div class="mobile-menu-button" @click="showMobileMenu = !showMobileMenu">&#9776;</div>

		<div class="content">
			<div class="top">
				<span v-for="(_, day) in scheduleData" :key="day">
					<div
						:class="{'dateButton': true, 'dateButton-active': day == activeDay}"
						@click="activeDay = day"
						v-if="day.length"
						>{{ day }}
					</div>
				</span>
				<div class="spacer"/>
				<p>Times are in {{ getTimeZone() }}</p>
			</div>

			<div class="schedule" v-for="(events, day) in scheduleData" :key="day">
				<span v-if="day == activeDay">

					<div v-for="(tileInfo, i) in events" :key="tileInfo.title">
						<div class="time" v-if="tileInfo && showTimeDivider(day, i) && isChecked(tileInfo.topics, tileInfo.format)">
							<h4 ref="time">{{ getTime(hourNorm(tileInfo.start)) }}</h4>
							<hr>
						</div>
						<schedule-tile
							v-if="isChecked(tileInfo.topics, tileInfo.format)"
							class="tile-indent"
							v-bind="tileInfo"
							:start="getTime(tileInfo.start)"
							:stop="getTime(tileInfo.stop)"
							:day="day"/>
					</div>
				</span>
			</div>

		</div>
	</div>
	<bottom/>

	<transition name="fade-in">
		<div class="dimmer" v-if="isMobile && showMobileMenu" @click="showMobileMenu = false"/>
	</transition>
</div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue';
import ScheduleTile from "@/components/general/ScheduleTile.vue";
import Bottom from '@/components/general/Footer.vue'

import ScheduleContent from '@/content/schedule.json';
var moment = require('moment-timezone');

export default {
	name: 'Schedule',
	components: {
		NavBar,
		ScheduleTile,
		Bottom,
	},
	data() {
		return {
			scheduleData: ScheduleContent,
			allTopics: [],
			checkedTopics: [],
			allFormats: [],
			checkedFormats: [],
			activeDay: '',
			displayTopics: true,
			displayFormats: true,
			isMobile: false,
			showMobileMenu: false,
			colors: {
				"Workshop": "#8394F2",
				"Panel": "#F57A75",
				"Keynote": "#17ADCE",
				"Lightning Talk": "#F9AFAB",
				"Fireside Chat": "#E28383",
				"Breakout Session": "#98D485",
				"Default": "#44AF69" // Misc
			},
		}
	},
	methods: {
		getTime(stamp) {
			if (stamp) {
				let date = moment(stamp, 'H:mm')
				date = date.add(4, 'hours') // Dates are in EST
				date = date.add(moment.parseZone().utcOffset(), 'minutes')
				return date.format("h:mm A")
			}
			return ''
		},
		getTimeZone() {
			var zone_name =  moment.tz.guess();
			return moment.tz(zone_name).zoneAbbr();
		},
		isChecked(topics, format) {
			if(this.checkedTopics.length || this.checkedFormats.length){
				return (
					(format && this.checkedFormats.includes(format)) ||
					(topics && topics.some(topic => this.checkedTopics.includes(topic)))
				)
			}
			return true
		},
		handleResize() {
			this.isMobile = window.innerWidth <= 850;
		},
		hourNorm(stamp) {
			const hours = stamp.split(':')[0];
			return hours + ':00';
		},
		showTimeDivider(day, i) {
			const prevTile = this.scheduleData[day][i - 1];
			const currTile = this.scheduleData[day][i];
			if (!prevTile || !prevTile.start) return true;
			if (!currTile || !currTile.start) return false;
			return this.hourNorm(prevTile.start) != this.hourNorm(currTile.start);
		}
	},
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	},
	beforeMount() {
		let topics = []
		let formats = []
		for(let i in this.scheduleData){
			for(let k in this.scheduleData[i]){
				for(let l in this.scheduleData[i][k]["topics"]){
					const topic = this.scheduleData[i][k]["topics"][l];
					if (topic) topics.push(topic)
				}
				const format = this.scheduleData[i][k]["format"];
				if (format) formats.push(format)
			}
		}
		this.allTopics = [...new Set(topics)]
		this.allFormats = [...new Set(formats)]
		this.activeDay = Object.keys(this.scheduleData)[0]
	}
}
</script>

<style scoped>
#schedule {
	--desktop-sidebar-width: 20rem;
	--border-divider-color: #CCCCCC;
}

.page {
	display: flex;
}

h4, p {
	color: black;
}
.time > h4 {
	padding-right: .25em;
	width: max-content;
}

.sidebar {
	width: var(--desktop-sidebar-width);
	height: 100vh;
	border-right: 1px solid rgb(0, 0, 0, 0.25);
	padding: 1rem;
}
.sidebar-title {
	margin-bottom: 0.75rem;
}
.sidebar-spacer {
	margin-bottom: 2rem;
}

.content {
	width: 100%;
}

.top {
	display: flex;
	border-bottom: 1px solid var(--border-divider-color);
	flex-wrap: wrap;
	align-items: center;
}
.top > .spacer {
	flex-grow: 1;
}
.top > p {
	margin-right: 1rem;
}

.time {
	display: flex;
	align-items: center;
	margin-top: 2%;
}
.time hr {
	flex-grow: 1;
	border: none;
	border-bottom: 2px solid var(--border-divider-color);
	margin: 1rem;
}
.tile-indent {
	margin-left: 4rem;
}

.dateButton {
	color: black;
	border: 3px solid #DADCE5;
	border-radius: 60px;
	margin: 1rem;
	padding: .5rem 2rem;
}
.dateButton:hover {
	cursor: pointer;
}
.dateButton-active {
	color: white;
	background:  #C8190F;
	border: 3px solid #C8190F;
}

.schedule {
	margin: 1rem;
}

.checkbox-row {
	display: flex;
	align-items: center;
	color: black;
	font-size: .8rem;
	margin-bottom: .5rem;
}
.checkbox-row>input {
	margin: 0;
	margin-left: 1rem;
	-webkit-appearance: none;
	border: 2px solid #666666;
	padding: .4rem;
	border-radius: 2px;
}
.checkbox-row>input:checked {
	border: 2px solid #C8190F;
	background: #C8190F;
	color: white;
}
.checkbox-row>label {
	margin-top: .1rem;
}
.checkbox-row>.dot {
	background: var(--format-color);
	height: .4rem;
	width: .4rem;
	border-radius: 20rem;
}
.checkbox-row>:not(:last-child) {
	margin-right: .25rem;
}

.mobile-menu-button {
	display: none;
}

@media screen and (max-width: 850px) {
	.sidebar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 5;
		width: 100vw;
		height: fit-content;
		padding-bottom: 20%;
		box-sizing: border-box;

		border: 1px solid var(--border-divider-color);
		background: white;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}
	.dimmer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.1643) 0%, rgba(0, 0, 0, 0.53) 25%);
		z-index: 3;
		opacity: 1;
	}

	.mobile-menu-button {
		position: fixed;
		z-index: 7;
		display: grid;
		place-items: center;

		font-size: 1.5rem;

		bottom: 5%;
		right: 5%;
		width: 3rem;
		height: 3rem;
		border-radius: 20rem;
		background: red;
	}

	.dateButton {
		margin: .5rem;
		padding: .75rem 1rem;
	}
	.schedule {
		margin: .5rem;
	}
	.tile-indent {
		margin-left: 0;
	}
}

.container {
  display: block;
  position: relative;
	color: black;
  padding-left: 32px;
  margin-bottom: 12px;
	padding-top: 1px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
	border: 1.5px solid darkgray;
	border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #C8190F;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6.5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.fade-in-enter-active,
.fade-in-leave-active {
	transition: all 0.5s;
}
.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0;
}
.pop-up-enter-active,
.pop-up-leave-active {
	transition: bottom 0.5s;
}
.pop-up-enter-from,
.pop-up-leave-to {
	/* // ! This could appear when it's not supposed to */
	bottom: -100vh;
}
</style>