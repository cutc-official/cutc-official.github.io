<template>
	<div id="faq">
		<h2>Ask us anything</h2>
		<div class="content">
			<div class="box" v-for="(questionSet, groupTitle) in questions" :key="groupTitle">
				<h3 v-if="groupTitle" class="header">{{groupTitle}}</h3>
				<div v-for="qa in questionSet" :key="qa">
					<button @click="show(qa.question)" class="question">
						<div :class="{'arrow-active': qa.question == currentQuestion, 'arrow-right': true}"></div>
						{{qa.question}}
					</button>
					<transition name="fadeHeight">
						<p v-if="qa.question == currentQuestion" class="p-content" v-html="qa.answer"></p>
					</transition>
				</div>
			</div>
		</div>
		<div class="button-holder">
			<a class="ask" href="mailto:info@cutc.ca">Send us a question!</a>
		</div>
	</div>
</template>

<script>
import Questions from "@/content/faq.json";

export default {
	name: "Faq",
	data() {
		return {
			questions: Questions,
			currentQuestion: ""
		};
	},
	methods: {
		show(question) {
			if (this.currentQuestion == question) this.currentQuestion = "";
			else this.currentQuestion = question;
		}
	}
};
</script>

<style scoped>
.content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
	grid-gap: 1em;
}

.box {
	margin-top: 1rem;
}

.header {
	padding: .2em;
	padding-left: .5em;
	background: #e84545;
	border-radius: 3px;
	font-weight: 600;
}
.question {
	overflow-wrap: break-word;
	font-family: inherit;
	background: none;
	border: none;
	padding: 1rem 0.5rem;
	font-size: 1rem;
	cursor: pointer;
	display: flex;
	font-weight: 600;
}
.p-content {
	padding: 0rem 2rem;
	overflow: hidden;
	color: black;
}

.arrow-right {
	margin-right: 0.5rem;
	border-top: 0.5rem solid transparent;
	border-bottom: 0.5rem solid transparent;
	border-left: 1.1rem solid #C4C4C4;
	margin-top: 0.15rem;
}
.arrow-active {
	transform: matrix(0.02, 1, -1, 0.02, 0, 0);
}

.button-holder {
	margin-top: 2rem;
	display: grid;
	place-items: center;
}
.ask {
	background: #e84545;
	border-radius: 5px;
	border: none;
	padding: 1em 2em;
	font-weight: 500;

	cursor: pointer;
	text-decoration: none;
	color: white;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
	transition: all 0.5s;
	max-height: 100vh;
}
.fadeHeight-enter-from,
.fadeHeight-leave-to {
	opacity: 0;
	max-height: 0px;
	overflow: hidden;
}

/* Deep selector due to dynamic content */
.p-content >>> a {
	color: var(--main-color);
	text-decoration: underline;
	text-decoration-color: var(--main-color);
}
</style>
