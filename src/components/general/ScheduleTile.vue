<template>
	<div class="tile" v-if="title" :style="{'--type-color': getColor(format)}">
		<div class="strip"></div>
		<div class="content">
			<div class="top-bar">
				<!-- <button v-if="start">
					<div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
						<img src="@/assets/schedule/addButton.svg" alt="Add to Calendar" />
						<div class="calendar" v-if="showDropdown">
							<a
								v-for="calendar in calendars"
								:key="calendar.name"
								class="child"
								:href="addCalendar(calendar.name)"
								target="_blank"
							>
								<img class="icon" :src="calendar.icon"/>
								<div>{{calendar.name}}</div>
							</a>
						</div>
					</div>
				</button> -->
				<h3>{{ title }}</h3>
				<div class="top-info">
					<div class="top-info-section" v-if="start">
						<img src="@/assets/schedule/clock.svg" alt="Time" />
						<p>{{ start + (stop ? ' - ' : '') + stop }}</p>
					</div>
					<div class="top-info-section" v-if="location">
						<img src="@/assets/schedule/location.svg" alt="Location" />
						<p>{{ location }}</p>
					</div>
					<div class="top-info-section" v-if="topics && topics.length">
						<p v-for="topic in topics" :key="topic" class="topic-tag">{{ topic }}</p>
					</div>
					<div class="top-info-section" v-if="link">
						<a :href="link" style="font-weight: bold;">Zoom Link</a>
					</div>
				</div>
			</div>
			<p>{{ description }}</p>

			<div class="speakers-container">
				<div
					v-for="speaker in speakers"
					:key="speaker"
					class="speaker"
				>
					<div class="speaker-img"><img :src="getImage(speaker)"/></div>
					<div class="speaker-description" v-if="speakerInfo[speaker]">
						<div class="name">{{speaker}}</div>
						<span>{{speakerInfo[speaker].title}}
							<span v-if="speakerInfo[speaker].org">
								@ {{speakerInfo[speaker].org}}
							</span>
						</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import Speakers from "@/content/speakers.json";
import GoogleCalendar from "@/assets/schedule/GoogleCalendar.png";
// import OutlookCalendar from "@/assets/schedule/OutlookCalendar.png";
// import AppleCalendar from "@/assets/schedule/AppleCalendar.png";

const stringDefault = {
	default: "",
	type: String
}

export default {
	name: "ScheduleTile",
	props: {
		title: String,
		description: stringDefault,
		format: stringDefault,
		location: stringDefault,
		start: stringDefault,
		stop: stringDefault,
		topics: {
			default: () => [],
			type: Array
		},
		speakers: {
			default: () => [],
			type: Array
		},
		day: {
			default: "24",
			type: String
		},
		link: stringDefault
	},

	data() {
		return {
			// ! Duplicated in SchedulePage.vue
			colors: {
				"Workshop": "#8394F2",
				"Panel": "#17AECE",
				"Keynote": "#FFA500",
				"Lightning Talk": "#F9AFAB",
				"Fireside Chat": "#F57A75",
				"Breakout Session": "#98D485",
				"Default": "lightgrey" // Misc
			},
			popUp: -1,
			speakerInfo: Speakers,
			showDropdown: false,
			calendars: [
				{ name: "Google Calendar", icon: GoogleCalendar },
				// { name: "Outlook", icon: OutlookCalendar },
				// { name: "Other", icon: AppleCalendar }
			]
		};
	},
	methods: {
		getImage(speaker) {
			try {
				return require("@/assets/speakers/Speaker=" + speaker + ".png");
			} catch (e) {
				if (speaker != 'Default')
					return this.getImage('Default')
				// throw Error(`pic does not exist: ${speaker}`);
			}
		},
		getColor(format) {
			if (this.colors[format])
				return this.colors[format]
			else
				return this.colors["Default"]
		},
		addCalendar(calendar) {
			let startDate = "";
			let endDate = ""
			switch(calendar) {
				case "Google Calendar":
					startDate = `202107${this.getDay()}T${this.cleanTimeStamp(this.start)}00`
					endDate = `202107${this.getDay()}T${this.cleanTimeStamp(this.stop)}00`
					return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate}$/${endDate}&details=${this.description}&location=${this.location}&text=${this.title}`
				case "Outlook":
					startDate = `2021-07-${this.getDay()}T${this.start}:00+00:00`
					endDate = `2021-07-${this.getDay()}T${this.stop}:00+00:00`
					// Switch to ascii codes
					startDate = startDate.replace(':', '%3A')
					startDate = startDate.replace('+', '%2B')
					endDate = endDate.replace(':', '%3A')
					endDate = endDate.replace('+', '%2B')
					return `https://outlook.office.com/calendar/0/deeplink/compose?body=${this.description}&startdt=${startDate}&enddt=${endDate}&location=${this.location}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=${this.title}`;
				default:
					// ICS.addEvent('EN', this.title, this.description, this.location, startDate, endDate, 'https://cutc.ca', 'CUTC')
					// ICS.download(this.title)
					// ICS.removeAllEvents()
					return;
			}
		},
		getDay() {
			return this.day.split(' ')[1];
		},
		cleanTimeStamp(val) {
			let stamp = val.trim().replace(':', '');
			if (stamp.length < 4)
				stamp = '0' + stamp;
			return stamp;
		}
	}
};
</script>

<style scoped>
.tile {
	position: relative;
	border: 1px solid #CCCCCC;
	--b-radius: 1rem;
	border-radius: var(--b-radius);
	margin: 1rem;

	display: grid;
	grid-template-columns: var(--b-radius) auto;

	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
	border-radius: .5rem;
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
	align-items: center;
}
.top-info > :not(:last-child) {
	margin-right: 1rem;
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

.topic-tag {
	padding: 0.25rem 1rem;
	border-radius: 50rem;
	background: #c8190f;

	color: white;
	font-size: 0.8em;
}

.speakers-container {
	display: grid;
	margin-top: 0.75rem;
	--speaker-size: 4rem;
	grid-template-columns: repeat(auto-fit, 15em);
	gap: 0.75rem;
}
.speaker-img {
	flex: 0 0 var(--speaker-size);
	height: var(--speaker-size);
	overflow: hidden;
	border-radius: 50%;
	background-color: var(--type-color);
	margin-right: 1rem;
}
.speaker-img>img {
	width: 100%;
}
.name {
	font-weight: bold;
}
.speaker {
	display: flex;
}

@media screen and (max-width: 850px) {
	.tile {
		margin: 1rem 0.25rem;
		font-size: .75rem;
	}
	.speaker-description {
		display: none;
		visibility: hidden;
	}
	.speakers-container {
		grid-template-columns: repeat(auto-fit, var(--speaker-size));
	}
}

@media screen and (max-width: 550px) {
	.speaker>.dialog {
		display: none;
	}
}
</style>