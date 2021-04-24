<template>
	<div >
		<NavBar/>
		<div class="content">
			<h2>Welcome!</h2>
			<h4>For more information, see our
				<a href="/CUTC Ambassador Outreach Package.pdf" target="_blank">Campus Activation Package</a>
			</h4>
			<div class="wrapper">
				<iframe
					id="sign-up-form"
					src="https://docs.google.com/forms/d/e/1FAIpQLScP2Bg6yQObtt91ZIUhxnq-vUI2u1Xu3V0ogr00-Flyp37j_g/viewform?embedded=true"
					marginheight="0"
					marginwidth="0"
					frameborder="0"
				/>
			</div>
		</div>
		<Footer/>
	</div>
</template>
<script>
import NavBar from "@/components/general/NavBar.vue";
import Footer from '@/components/general/Footer.vue';

export default {
	components: {
		NavBar,
		Footer
	}
}
</script>

<style scoped>
.content {
	margin: 1em 5em;
}

.wrapper {
	--form-height: 245em;
}

a, h4 {
	color: black;
}
a {
	text-decoration: underline;
}

iframe {
	width: 100%;
	min-height: var(--form-height);
	border: none;
	padding: 1em 0;
	margin: 0 auto;
	display: block;
}

@media(max-width: 650px) {
	iframe {
		min-height: calc(var(--form-height) * 1.05);
	}
}

@media(max-width: 550px) {
	iframe {
		min-height: calc(var(--form-height) * 1.15);
	}
}

@media(max-width: 465px) {
	iframe {
		min-height: calc(var(--form-height) * 1.25);
	}
}

@media(max-width: 380px) {
	iframe {
		min-height: calc(var(--form-height) * 1.27);
	}
}

@media(max-width: 350px) {
	iframe {
		min-height: calc(var(--form-height) * 1.4);
	}
}
@media(max-width: 320px) {
	iframe {
		min-height: calc(var(--form-height) * 1.5);
	}
}
</style>