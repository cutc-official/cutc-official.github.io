<template>
<div id="about">
	<h1>Our History</h1>
	<div class="history-gallery-container">
		<div class="history-gallery">
			<div class="history-item history-beginning">
				<h3>The Beginning</h3>
				<p>Our first conference was held in March 2000 at the University of Waterloo.</p>
			</div>
			<div class="history-item history-growth">
				<h3>Rapid Growth</h3>
				<p>We consistently sold out every conference, tripling our initial attendance within a couple of years.</p>
			</div>
			<div class="history-item history-decade">
				<h3>The First Decade</h3>
				<p>We celebrated our 10th anniversary by passing the 2500th CUTC attendee milestone!</p>
			</div>
			<div class="history-item history-digital">
				<h3>Going Digital</h3>
				<p>CUTC 2020: Reconnect marked our first all-virtual conference, with 2100+ attendees from 14 countries.</p>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
#about {
	--width: 60rem;
	max-width: var(--width);
	margin: auto;
	color: black;
}
/* Firefox scrollbars */
.history-gallery-container {
	width: 100%;
	overflow-x: auto;
	scrollbar-width: thin;
	scrollbar-color: #C8190F #FEF1F0;
}
/* Chrome scrollbars */
.history-gallery-container::-webkit-scrollbar {
	width: 0.33rem;
}
.history-gallery-container::-webkit-scrollbar-thumb {
	background: #C8190F;
	border-radius: 1rem;
}
.history-gallery-container::-webkit-scrollbar-track {
	background: #FEF1F0;
	border-radius: 1rem;
}
.history-gallery {
	position: relative;
	width: var(--width);
	height: calc(var(--width) * 0.4);
	box-sizing: content-box;
	background-image: url(../../assets/Timeline.png);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
.history-item {
	position: absolute;
}
.history-item h3 {
	font-weight: bold;
}
.history-item p {
	font-size: 90%;
}
.history-beginning {
	top: 4%;
	left: 4.58%;
	width: 16.67%;
}
.history-growth {
	top: 2%;
	left: 26.67%;
	width: 20%;
}
.history-decade {
	top: 6%;
	left: 50.83%;
	width: 20%;
}
.history-digital {
	top: 1.25%;
	left: 81.67%;
	width: 18.33%;
}
</style>