<template>
<div id="schedule">
	<nav-bar/>
	<span style="display: flex;">
		<div class="sidebar" v-if="!isMobile || showMobileMenu">
			<h4>Topics</h4>
			<span v-if="displayTopics">
				<div class="checkbox-row" v-for="i in allTopics" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedTopics">
					<label for="i" class="checkboxText">{{ i }}</label>
				</div>
			</span>
			<div class="spacer"/>
			<h4>Format</h4>
			<span v-if="displayFormats">
				<div class="checkbox-row" v-for="i in allFormats" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedFormats" class="checkbox">
					<div class="dot" :style="{'--format-color': colors[i]}"></div>
					<label for="i" class="checkboxText">{{ i }}</label>
				</div>
			</span>
		</div>
		<div class="mobile-menu-button" @click="showMobileMenu = !showMobileMenu">&#9776;</div>

		<div class="content">
			<div class="top">
				<div
					v-for="(_, day) in scheduleData"
					:key="day"
					:class="{'dateButton': true, 'dateButton-active': day == activeDay}"
					@click="activeDay = day"
					>{{ day }}
				</div>
				<!-- <span>
					<h4>Timezone: </h4>
					<select id="timezones" @change="onChange($event)">
						<option v-for="zone in timezones" :key="zone" :value="zone">{{ zone }}</option>
					</select>
				</span> -->
			</div>

			<div class="schedule">
				<div v-for="(schedule, day) in scheduleData" :key="day">
					<span v-if="day == activeDay">
						<div v-for="(events, time) in schedule" :key="time">
							<div class="time" v-if="time && events && events.length">
								<h4 id="time">{{ time }}</h4>
								<hr>
							</div>
							<div v-for="tileInfo in events" :key="tileInfo.title">
								<schedule-tile v-if="isChecked(tileInfo.topics, tileInfo.format)" v-bind="tileInfo" :day="day"/>
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
			activeDay: '',
			displayTopics: true,
			displayFormats: true,
			isMobile: false,
			showMobileMenu: false,
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
		onChange(event) {
			const time = document.getElementById("time");
			const date = (moment(time.innerHTML, 'hh:mm')).toDate()
			time.innerHTML = moment.tz(date, event.target.value).format("hh:mm")
		},
		isChecked(topics, format) {
			if(this.checkedTopics.length || this.checkedFormats.length ){
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
	},
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
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
		this.activeDay = Object.keys(this.scheduleData)[0]
	}
}
</script>

<style scoped>
#schedule {
	--desktop-sidebar-width: 20rem;
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

.spacer {
	margin: 1rem;
}

.content {
	width: 100%;
}

.top {
	display: flex;
}

.time {
	display: flex;
	align-items: center;
	margin-top: 2%;
}
.time hr {
	width: 90%;
	height: .1rem;
	border: 2px solid #CCCCCC;
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
	margin-bottom: .25rem;
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
	/* .sidebar {
		position: absolute;
		bottom: 0;
		z-index: 5;
		width: 100%;
		height: fit-content;
		padding-bottom: 20%;
		border: 1px solid grey;

		background: white;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	.mobile-menu-button {
		position: absolute;
		z-index: 10;
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

	.fadeHeight-enter-active,
	.fadeHeight-leave-active {
		transition: all 0.5s;
		max-height: 100vh;
	}
	.fadeHeight-enter-from,
	.fadeHeight-leave-to {
		opacity: 0;
		max-height: 0px;
		overflow: hidden;
	} */

	.sidebar {
		display: none;
	}

	.dateButton {
		padding: .75rem 1rem;
	}
}
</style>