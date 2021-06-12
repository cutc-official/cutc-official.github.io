<template>
	<router-link v-if="link" to="/schedule">View full schedule ></router-link>
	<span style="display: flex;">
		<div class="sidebar">
			<h4 class="word">Topics <img :class="displayTopics ? 'arrow' : 'arrow-flipped'" src="@/assets/misc/CloseArrow.svg" @click="displayTopics = !displayTopics"></h4>
			<span v-if="displayTopics">
				<div style="color: black;" v-for="i in allTopics" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedTopics" class="checkbox">
					<label for="i" class="checkboxText">{{ i }}</label>
					<br>
				</div>
			</span>
			<hr class="sidebar-hr" />

			<h4 class="word">Format <img :class="displayFormats ? 'arrow' : 'arrow-flipped'" src="@/assets/misc/CloseArrow.svg" alt="" @click="displayFormats = !displayFormats"></h4>
			<span v-if="displayFormats">
				<div style="color: black;" v-for="i in allFormats" :key="i">
					<input type="checkbox" :id="i" :value="i" v-model="checkedFormats" class="checkbox">
					<label for="i" class="checkboxText">{{ i }}</label>
					<br>
				</div>
			</span>
		</div>

		<div>
			<div class="top">
				<span :class="active1 ? 'dateButton-active' : 'dateButton'" @click="active1 = true, active2 = false">JULY 24</span>
				<span :class="active2 ? 'dateButton-active': 'dateButton'" @click="active2 = true, active1 = false">JULY 25</span>
				<span style="position: absolute; display:flex; margin-left: 20%;">
					<h4>Timezone: </h4>
					<select id="timezones" @change="onChange($event)">
						<!-- <option v-for="n in 26" :key="n" :value="n">{{ n - 13 }}</option> -->
						<option value="time"> America/Toronto </option>
					</select>
				</span>
				<hr class="top-hr" />
			</div>
			<div class="schedule">
				<div v-for="(events, time) in scheduleData" :key="time">
					<h4 class="time">{{ time }} <hr class="time-hr" /></h4>
					<div v-for="tileInfo in events" :key="tileInfo">
						<schedule-tile v-if="isChecked(tileInfo.topics, tileInfo.format)" class="tile" v-bind="tileInfo"/>
					</div>
				</div>
			</div>
		</div>
	</span>
</template>

<script>
import ScheduleTile from "@/components/general/ScheduleTile.vue";
import ScheduleContent from '@/content/schedule.json';

export default {
	name: 'Schedule',
	components: {
		ScheduleTile
	},
	props: {
		link: Boolean
	},
	data() {
		return {
			scheduleData: ScheduleContent,
			allTopics: [],
			checkedTopics: [],
			allFormats: [],
			checkedFormats: [],
			active1: true,
			active2: false,
			displayTopics: true,
			displayFormats: true
		}
	},
	methods: {
		onChange(event) {
			console.log(event.target.value);
			// var time = moment()
		},
		isChecked(topics, format) {
			if(this.checkedTopics.length || this.checkedFormats.length ){
				return ((this.checkedFormats.includes(format)) || topics.some(topic => (this.checkedTopics.includes(topic))))
			}
			return true
		},
	},
	beforeMount() {
		let topics = []
		let formats = []
		for(let i in this.scheduleData){
			for(let j in this.scheduleData[i]){
				for(let k in this.scheduleData[i][j]["topics"]){
					topics.push(this.scheduleData[i][j]["topics"][k])
				}
				formats.push(this.scheduleData[i][j]["format"])
			}
		}
		this.allTopics = [...new Set(topics)]
		this.allFormats = [...new Set(formats)]
	}
}
</script>

<style scoped>
a {
	color: var(--main-color);
	text-decoration: underline;
}

h4 {
	color: black;
}

.word {
	margin: 2rem 0 2rem 2rem;
}

.time-hr {
	display: inline;
	position: absolute;
	margin-left: 20px;
	width: 60%;
	border: 2px solid #CCCCCC;
}

.top-hr {
	position: absolute;
	width: 70%;
	margin-top: 2%;
	margin-left: -49px;
	border: 2px solid #CCCCCC;
}

.sidebar {
	width: 400px;
	float: left;
	height: 1000px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-right: 1rem;
}

.arrow {
	margin-left: 30%;
	width: 20px;
	height: 15px;
}

.arrow-flipped {
	margin-left: 30%;
	width: 20px;
	height: 15px;
	transform: rotate(180deg);
}

.time {
	margin-top: 2%;
}

.top {
	margin: 2rem;
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
	margin-top: 12%;
	margin-left: 15%;
}

.tile {
	margin-left: 5%;
}

.checkbox {
	margin-left: 8%;
	margin-right: 2%;
	-webkit-appearance: none;
	border: 2px solid #666666;
	padding: 5px;
	border-radius: 2px;
	display: inline-block;
	width: 24px;
	height: 24px;
}

.checkbox:checked {
	border: 2px solid #C8190F;
	background: #C8190F;
	color: white;
}

.checkbox:checked:after {
	font-family: FontAwesome;
	content: '\f00c';
	font-weight: 900;
	background: #C8190F;
	color: white;
	font-size: 12px;
	position: absolute;
}

.checkboxText {
	margin-top: 10px;
	position: absolute;
}
</style>