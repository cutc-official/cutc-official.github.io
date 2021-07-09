<template>
	<!-- <a href="https://www.eventbrite.ca/e/canadian-undergraduate-technology-conference-cutc-2021-registration-151149800121"
		target="_blank"
		class="register-button"
		>REGISTER FOR FREE
	</a> -->
		
	<a @onclick="openCheckout()" id="eventbrite-widget-modal-trigger-151149800121" rel="noopener noreferrer" target="_blank" class="register-button" >
		Buy Tickets
	</a>
</template>

<script>
export default {
	name: 'registerButton',
	mounted() {
		let recaptchaScript = document.createElement('script')
		recaptchaScript.setAttribute('src', 'https://www.eventbrite.ca/static/widgets/eb_widgets.js')
		document.head.appendChild(recaptchaScript)
	},
	methods: {
		openCheckout() {
			let exampleCallback = () =>{
				console.log('Order complete!');
			}
			window.EBWidgets.createWidget({
				widgetType: 'checkout',
				eventId: '151149800121',
				modal: true,
				iframeContainerId: "example-widget-trigger",
				modalTriggerElementId: 'eventbrite-widget-modal-trigger-151149800121',
				onOrderComplete: exampleCallback
			});
		}
	}
}


</script>

<style scoped>
.register-button {
	width: max-content;
	background: white;
	padding: .6em 1em;
	border-radius: .8em;
	color: var(--main-color);
	font-size: 1.1rem;
}
</style>