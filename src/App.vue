<template>
  <router-view/>
</template>

<style>
/* GLOBAL VARIABLES */
:root {
  /* COLORS */
  --main-color: #C8190F;
  --nav-color: #A3241D;
  --background: #FEE8E7;

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
/* TEMPORARY FOR SPLASH PAGE */
html, body {margin: 0; height: 100%; overflow: hidden}
body {
  margin: 0px;
  background: #FBDCDA;
}


/* GLOBAL STYLES */

a {
  color: white;
}
/* p {} */
h4, h3, h2, h1 { margin: .2em 0 }
h4 {
  font-size: 22;
  font-weight: 500;
}
h3 {
  font-size: 24;
  font-weight: 500;
}
h2 {
  font-size: 32;
  font-weight: 400;
}
h1 {
  font-size: 44;
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
