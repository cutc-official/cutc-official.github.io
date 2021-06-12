<template>
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
</template>

<style scoped>
.about_section{
	display: flex;
	flex-direction: row;
	color: black;
	align-items: center;
}
.about_image{
	width: 50%;
	margin-right: 5%;
}
@media screen and (max-width:880px) {
	.about_section{
		flex-wrap: wrap-reverse;
	}
	h1{
		font-size: 2em;
	}
	.about_image{
		width: 80%;
		margin: auto;
		margin-top: 5%;
	}
}
p{
	float: none;
}
</style>