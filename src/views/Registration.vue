<template>
<div id="#registration">
	<div class="nav" ref="navbar">
		<nav-bar></nav-bar>
	</div>
	<div id="eventbrite-widget-container-150236921677"></div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
	name: 'Registration',
	components: {
		NavBar
	},
	methods: {
		orderCompleteCallback(order) {
			console.log(order.orderId);
		}	
	},
	// Mounted instead of created to wait for ref
	mounted() {
		window.EBWidgets.createWidget({
			// Required
			widgetType: 'checkout',
			eventId: '150236921677',
			iframeContainerId: 'eventbrite-widget-container-150236921677',
			// Optional
			iframeContainerHeight: window.innerHeight - this.$refs.navbar.clientHeight,
			onOrderComplete: this.orderCompleteCallback
		});
	}
}
</script>

<style scoped>
.nav {
	background: black;
}
p {
	color: black;
}
</style>