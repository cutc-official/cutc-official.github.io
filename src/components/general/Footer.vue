<template>
	<div class="footer-position">
		<div class="footer-background">
			<div class="footer-content">
				<p class="title">CUTC 2021 &mdash; Amplify</p>
				<p class="contact">Contact us</p>
				<div class="cutc-icons">
					<a
						v-for="item in items"
						:key="item.link"
						:href="`${item.link}`"
						target="_blank"
						class="icons"
					>
						<img :src="getImage(item.image)" />
					</a>
				</div>
				<p>&copy; Copyright 2021 CUTC</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Bottom",
	data() {
		return {
			items: [
				{
					link: "https://www.facebook.com/cutc2021/",
					image: "facebook.svg"
				},
				{
					link: "https://www.instagram.com/cutc2021/",
					image: "instagram.svg"
				},
				{
					link: "https://twitter.com/CUTC2021",
					image: "twitter.svg"
				},
				{
					link: "https://www.linkedin.com/company/canadian-undergraduate-technology-conference/",
					image: "linkedin.svg"
				}
			]
		};
	},
	methods: {
		getImage(name) {
			return require("@/assets/socials/" + name);
		}
	}
};
</script>

<style scoped>
.footer-position {
	--footer-height: 15rem;
	height: calc(var(--footer-height) + 5rem);
}

.footer-background {
	position: absolute;
	bottom: 0;
	width: 100%;

	display: flex;
	align-items: center;
	padding-top: 6rem;
	background: linear-gradient(
		180deg,
		#ffffff -0.11%,
		#ff9d9d 32.5%,
		#ff5050 100%
	);
	height: var(--footer-height);
}
.footer-content {
	text-align: center;
	margin: 0 auto;
	width: 50%;
	min-width: max-content;
}
.cutc-icons {
	margin-bottom: 0.5rem;
}
.icons:not(:first-child) {
	margin-left: 0.75rem;
}
.title {
	font-size: 1.3rem;
	margin-bottom: 0.25rem;
	font-weight: bold;
}
.contact {
	margin: 0.5rem 0;
	font-weight: bold;
}
</style>

