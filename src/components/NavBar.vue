<template>
	<div id="nav-bar">
		<img src="../assets/logo.svg">

		<label v-if="isMobile" @click="openMenu">&#9776;</label>
		<nav v-else>
			<a href="#about">ABOUT</a>
			<a href="#speakers">SPEAKERS</a>
			<a href="#testimonials">TESTIMONIALS</a>
			<a href="#sponsors">SPONSORS</a>
			<a href="#faq">FAQ</a>
		</nav>

		<!-- MOBILE MENU -->
		<div v-if="isMobile && isMenuOpen" class="mobileMenu">
			<label @click="closeMenu">&#x2715;</label>
			<nav>
				<a @click="closeMenu" href="#about">ABOUT</a>
				<hr noshade>
				<a @click="closeMenu" href="#speakers">SPEAKERS</a>
				<hr noshade>
				<a @click="closeMenu" href="#testimonials">TESTIMONIALS</a>
				<hr noshade>
				<a @click="closeMenu" href="#sponsors">SPONSORS</a>
				<hr noshade>
				<a @click="closeMenu" href="#faq">FAQ</a>
			</nav>
		</div>
	</div>
</template>


<script>
export default {
	name: 'NavBar',
	data() {
		return {
			// ! DOESN'T UPDATE ON SCREEN CHANGE
			isMobile: screen.width < 850,
			isMenuOpen: false
		}
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth <= 850;
		},
		openMenu() {
			this.isMenuOpen = true; 
		},
		closeMenu() {
			this.isMenuOpen = false;
		}
	},
	beforeCreate() {
		// ! "THIS" PROBLEMS ARE WEIRD
		const obj = this;
		window.addEventListener('resize', function(){obj.handleResize()});
	}
}
</script>

<style scoped>
#nav-bar {
	padding: 1em;
	display: flex;
	justify-content: space-between;
}

label {
	font-size: 32px;
}
img {
	padding: 0 7vw 0 var(--splash-page-inset);
}

nav {
	display: flex;
	align-items: center;
}
a {
	margin: 0 5vw 0 0;
	text-decoration: none;
	font-weight: 600;
}

@media screen and (max-width: 850px) {
	nav {
		flex-direction: column;
		align-items: flex-start;
	}
	a {
		padding: 0.5em 2em;
		color: var(--nav-color);
		font-size: 24px;
	}
}

.mobileMenu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	background: white;
	color: var(--nav-color);
}
hr {
	width: 100%;
	border: 1px solid var(--nav-color);
}

</style>
