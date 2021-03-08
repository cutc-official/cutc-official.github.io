<template>
	<header id="nav-bar">
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
			<div class="close-button">
				<label @click="closeMenu">&#x2715;</label>
			</div>
			<nav>
				<a @click="closeMenu" href="#about">ABOUT</a>
				<a @click="closeMenu" href="#speakers">SPEAKERS</a>
				<a @click="closeMenu" href="#testimonials">TESTIMONIALS</a>
				<a @click="closeMenu" href="#sponsors">SPONSORS</a>
				<a @click="closeMenu" href="#faq">FAQ</a>
			</nav>
		</div>
	</header>
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
		window.addEventListener('resize', () => this.handleResize());
	}
}
</script>

<style scoped>
#nav-bar {
	padding: 1em;
	display: flex;
	max-width: 100%;
	justify-content: space-between;
}

label {
	font-size: 48px;
}
img {
	padding: 0 7vw 0 var(--splash-page-inset);
}

nav {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 80vw;
}
a {
	text-decoration: none;
	font-weight: 600;
}

.mobileMenu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 2;

	background: white;
	color: var(--nav-color);
}

.mobileMenu>nav {
		flex-direction: column;
		align-items: flex-start;
		width: 100vw;
	}
.mobileMenu>nav>a {
	padding: 1em 2em;
	color: var(--nav-color);
	font-size: 24px;
}
.mobileMenu>nav>a:not(:last-child) {
	width: 100%;
	border-bottom: 2px solid var(--nav-color);
}

.close-button {
	margin: 1em 0 1em 85%;
}

</style>
