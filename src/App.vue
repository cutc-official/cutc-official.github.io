<template>
	<router-view/>
</template>

<style>
/* GLOBAL VARIABLES */
:root {
	/* COLORS */
	--main-color: #C8190F;
	--nav-color: #B3160D;

	--splash-page-inset: 10%;
}

/* APP SETTINGS */
#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: white;
}

html {
	scroll-behavior: smooth;
	position: relative;
	min-height: 100vh;
}
body {
	margin: 0px;
	background: #fff;
}


/* GLOBAL STYLES */

p {
	font-size: 1em;
}
h4, h3, h2, h1, p, a {
	margin: .2em 0;
	font-family: Montserrat;
	font-style: normal;
}
h4 {
	font-size: 1.375em;
	font-weight: 500;
}
h3 {
	font-size: 1.5em;
	font-weight: 500;
}
h2 {
	font-size: 2.5em;
	font-weight: 700;
	color: black;
}
h1 {
	font-size: 2.75em;
	font-weight: 700;
}

/* Make links look like links even with no href */
a {
	text-decoration: underline;     
	text-decoration-color: rgba(255, 255, 255, 0.5);  
	cursor: pointer;
}

/* Just for input */
input::placeholder { color: var(--main-color) }
input:-ms-input-placeholder { color: var(--main-color) }
input::-ms-input-placeholder { color: var(--main-color) }
input {
	border: 0;
	border-radius: 50em;
	padding: 1.5em;
	margin-top: .5em;
	margin-bottom: 1em;
	font-family: inherit;
	font-size: 1rem;
	color: var(--main-color);
}

@media screen and (max-width: 850px) {
	h1 {
		font-size: 1.5em;
	}
	h2 {
		font-size: 2em;
	}
}

[v-cloak] {
	display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
