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
	--width: 75vw;
	max-width: var(--width);
	margin: auto;
	color: black;
}
@media screen and (max-width:1250px) {
	#about {
		--width: 60rem;
	}
}
p{
	float: none;
}
</style>