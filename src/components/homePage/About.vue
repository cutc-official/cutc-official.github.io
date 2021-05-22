<template>
<div id="about">
	<div class="about_section">
		<img src="@/assets/misc/about.svg" alt="about image" class="about_image">
		<div class="about_text">
			<h1>Canada’s largest student-run conference</h1>
			<p>
				For over 20 years, our conferences have represented opportunities to connect with industry leaders, gain valuable tech experience, network with like-minded people, and more.<br>
				This year, we want to be an amplifier for unexplored opportunities, undiscovered interests, and unheard voices in tech. We'll have something in store for every type of student, no matter your background, location, program, or interests.
			</p>
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
.about_section{
	display: flex;
	flex-direction: row;
}
.about_image{
	width: 80vh;
	height: auto;
	margin-right: 10vh;
}
@media screen and (max-width:880px) {
	#about {
		--width: 60rem;
	}
	h1{
		font-size: 2em;
	}
	.about_section{
		flex-direction: column-reverse;
	}
	.about_image{
		width: 80%;
		height: auto;
		margin: auto;
		margin-top: 5vh;
	}
}
p{
	flex: none;
}
</style>