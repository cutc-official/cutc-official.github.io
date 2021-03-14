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

html { scroll-behavior: smooth }
body {
	margin: 0px;
	background: #fff;
}


/* GLOBAL STYLES */

a {
	color: white;
}
h4, h3, h2, h1, p, a {
	margin: .2em 0;
	font-family: Montserrat;
  font-style: normal;
}
h4 {
	font-size: 22px;
	font-weight: 500;
}
h3 {
	font-size: 24px;
	font-weight: 500;
}
h2 {
	font-size: 40px;
	font-weight: 700;
	color: black;
}
h1 {
	font-size: 44px;
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
	padding: 1em;
	margin-top: .5em;
	margin-bottom: 1em;
	color: var(--main-color);
}
</style>
