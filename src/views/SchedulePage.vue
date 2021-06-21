<template>
<div id="schedule">
	<nav-bar/>
	<span style="display: flex;">
		<div class="sidebar">
			<h4>Topics</h4>
			<span v-if="displayTopics">
				<div class="checkbox-row" v-for="i in allTopics" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedTopics" class="checkbox">
					<label for="i" class="checkboxText">{{ i }}</label>
				</div>
			</span>

			<h4>Format</h4>
			<span v-if="displayFormats">
				<div class="checkbox-row" v-for="i in allFormats" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedFormats" class="checkbox">
					<label for="i" class="checkboxText">{{ i }}</label>
				</div>
			</span>
		</div>

		<div class="content">
			<div class="top">
				<span :class="active1 ? 'dateButton-active' : 'dateButton'" @click="active1 = true, active2 = false">JULY 24</span>
				<span :class="active2 ? 'dateButton-active': 'dateButton'" @click="active2 = true, active1 = false">JULY 25</span>
				<!-- <span>
					<h4>Timezone: </h4>
					<select id="timezones" @change="onChange($event)">
						<option v-for="zone in timezones" :key="zone" :value="zone">{{ zone }}</option>
					</select>
				</span> -->
			</div>

			<div class="schedule">
				<div v-for="(schedule, day) in scheduleData" :key="day">
					<span v-if="isDay(day)">
						<div v-for="(events, time) in schedule" :key="time">
							<h4 class="time" id="time" v-if="events && events.length">{{ time }}</h4>
							<div v-for="tileInfo in events" :key="tileInfo">
								<schedule-tile v-if="isChecked(tileInfo.topics, tileInfo.format)" v-bind="tileInfo"/>
							</div>
						</div>
					</span>
				</div>
			</div>

		</div>	
	</span>
	<bottom/>
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
			active1: true, // ! Change to activeDay
			active2: false,
			displayTopics: true,
			displayFormats: true,
			timezones: [
				'Africa/Lagos',
				'America/Argentina/Rio_Gallegos',
				'America/Buenos_Aires',
				'America/Chicago',
				'America/Costa_Rica',
				'America/Detroit',
				'America/Edmonton',
				'America/Halifax',
				'America/Jamaica',
				'America/Los_Angeles',
				'America/Montreal',
				'America/Sao_Paulo',
				'America/Toronto',
				'Asia/Beirut',
				'Asia/Dubai',
				'Asia/Qatar',
				'Atlantic/Bermuda',
				'Australia/Melbourne',
				'Brazil/East',
				'Canada/Central',
				'Canada/Eastern',
				'Europe/Amsterdam',
			],
		}
	},
	methods: {
		onChange(event) {
			const time = document.getElementById("time");
			const date = (moment(time.innerHTML, 'hh:mm')).toDate()
			time.innerHTML = moment.tz(date, event.target.value).format("hh:mm")
		},
		isChecked(topics, format) {
			if(this.checkedTopics.length || this.checkedFormats.length ){
				return ((this.checkedFormats.includes(format)) || topics.some(topic => (this.checkedTopics.includes(topic))))
			}
			return true
		},
		isDay(day){
			if(this.active1 && day == "July 24"){
				return true
			} else if (this.active2 && day == "July 25"){
				return true
			}
			return false
		}
	},
	beforeMount() {
		let topics = []
		let formats = []
		for(let i in this.scheduleData){
			for(let j in this.scheduleData[i]){
				for(let k in this.scheduleData[i][j]){
					for(let l in this.scheduleData[i][j][k]["topics"]){
						const topic = this.scheduleData[i][j][k]["topics"][l];
						if (topic) topics.push(topic)
					}
					const format = this.scheduleData[i][j][k]["format"];
					if (format) formats.push(format)
				}
			}
		}
		this.allTopics = [...new Set(topics)]
		this.allFormats = [...new Set(formats)]
	}
}
</script>

<style scoped>
#schedule {
	--desktop-sidebar-width: 20rem;
}

a {
	color: var(--main-color);
	text-decoration: underline;
}

h4 {
	color: black;
}

.sidebar {
	width: var(--desktop-sidebar-width);
	height: 100vh;
	border-right: 1px solid rgb(0, 0, 0, 0.25);
	padding: 1rem;
}

.content {
	width: 100%;
}

.time {
	margin-top: 2%;
	display: inline;
}
.time-hr {
	display: inline;
	position: absolute;
	margin-left: 20px;
	width: 60%;
	border: 2px solid #CCCCCC;
}

.top {
	display: flex;
}

.dateButton {
	color: black;
	border: 3px solid #DADCE5;
	box-sizing: border-box;
	border-radius: 60px;
	margin: 1rem;
	padding: 15px 40px;
}

.dateButton-active {
	color: white;
	background:  #C8190F;
	border: 3px solid #C8190F;
	box-sizing: border-box;
	border-radius: 60px;
	margin: 1rem;
	padding: 15px 40px;
}

.schedule {
	margin: 1rem;
}

.checkbox-row {
	color: black;
	font-size: .8rem;
}

.checkbox {
	margin: 0 1rem;
	-webkit-appearance: none;
	border: 2px solid #666666;
	padding: .5rem;
	border-radius: 2px;
	width: 1rem;
	height: 1rem;
}

.checkbox:checked {
	border: 2px solid #C8190F;
	background: #C8190F;
	color: white;
}

.checkboxText {
	margin-top: .2rem;
	position: absolute;
}

@media screen and (max-width: 850px) {
	.sidebar {
		position: absolute;
		top: 80%;
		width: 100%;
		background: white;
	}
}
</style>