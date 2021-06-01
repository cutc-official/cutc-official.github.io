<template>
	<header id="nav-bar" :class="{'gradient': hasBackground}">
		<router-link to="/"><img src="@/assets/misc/logo.svg"></router-link>

		<button v-if="isMobile" @click="openMenu">&#9776;</button>
		<nav v-else>
			<router-link to="/">HOME</router-link>
			<router-link to="/speakers">SPEAKERS</router-link>
			<router-link to="/schedule">SCHEDULE</router-link>
			<router-link to="/blog">BLOG</router-link>
			<register-button/>
		</nav>

		<!-- MOBILE MENU -->
		<transition name="fade">
			<div v-if="isMobile && isMenuOpen" class="mobileMenu">
				<button class="close-button" @click="closeMenu">&#x2715;</button>
				<nav>
					<router-link @click="closeMenu" to="/">HOME</router-link>
					<router-link @click="closeMenu" to="/speakers">SPEAKERS</router-link>
					<!-- <router-link @click="closeMenu" to="/schedule">SCHEDULE</router-link> -->
					<router-link @click="closeMenu" to="/blog">BLOG</router-link>
				</nav>
			</div>
		</transition>
	</header>
</template>


<script>
import RegisterButton from '@/components/general/RegisterButton.vue';

export default {
	name: 'NavBar',
	components: {
		RegisterButton
	},
	props: {
		hasBackground: {
			default: true,
			type: Boolean
		}
	},
	data() {
		return {
			isMobile: screen.width <= 850,
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
	created() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	}
}
</script>

<style scoped>
#nav-bar {
	display: flex;
	justify-content: space-between;
	padding: 1em var(--splash-page-inset);
}

.gradient {
	background: linear-gradient(180deg, #FB6262 0%, #FF6262 100%);
}

button {
	font-size: 3em;
	background: none;
	border: none;
	color: white;
}
img {
	padding-right: 7vw;
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
	font-size: 1.5em;
}
.mobileMenu>nav>a:not(:last-child) {
	width: 100%;
	border-bottom: 2px solid var(--nav-color);
}

.close-button {
	margin: 1em 0 1em 85%;
	color: var(--nav-color);
}
</style>
