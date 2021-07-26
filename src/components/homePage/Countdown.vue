<template>
	<div id="countdown">
		<p class="title">CUTC COUNTDOWN!</p>
		<p>THANKS FOR</p>
		<p>COMING!</p>
	</div>
</template>

<script>
export default {
	name: 'Countdown'
}
</script>

<style scoped>
#countdown {
	position: absolute;
	bottom: 34%;
	right: 36%;
	padding: 0.5em;

	background: #ffe8e8;
	border-radius: 8px;

	transform: translate(50%, 50%) skew(0, -19deg);
	z-index: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
}

.title {
	text-align: center;
	font-weight: normal;
	font-size: 0.7em;
}

p {
	margin: auto;
	font-weight: bold;
	font-size: 1em;
	color: var(--nav-color);
}
</style>