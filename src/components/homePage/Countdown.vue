<template>
	<div id="countdown">
		<p class="title">COUNTDOWN!</p>
		<div class="data">
		<p>{{days}}</p>
		<p>{{hours}}</p>
		<p>{{minutes}}</p>
		<p>{{seconds}}</p>
		<p>D</p><p>H</p><p>M</p><p>S</p>
		</div>
	</div>
</template>

<script>
const conferenceDate = new Date('July 24, 2021 10:00:00');
export default {
	name: 'Countdown',
	data: () => ({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}),
	methods: {
		updateTimeStamp() {
			const now = Date.now();
			const diff = new Date(conferenceDate - now);
			this.days = Math.round(diff / 1000 / 60 / 60 / 24);
			this.hours = diff.getHours();
			this.minutes = diff.getMinutes();
			this.seconds = diff.getSeconds();
		}
	},
	beforeMount() {
		setInterval(this.updateTimeStamp, 1000);
	}
}
</script>

<style scoped>
#countdown {
	position: absolute;
	top: 48%;
	left: 15%;
	width: 30%;
	padding: 0.5em;

	background: #ffe8e8;
	border-radius: 8px;

	transform: translate(50%, 50%) skew(0, -19deg);
	z-index: 1;
}

.data {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}

.title {
	text-align: center;
	font-weight: normal;
}

p {
	margin: auto;
	font-weight: bold;
	font-size: 1vw;
	color: var(--nav-color);
}
</style>