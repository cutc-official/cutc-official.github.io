<template>
	<div id="blog">
		<div class="header">
			<h2>Our Blog</h2>
			<router-link v-if="limit" to="/blog" class="more">View all articles ></router-link>
		</div>

		<div class="grid">
			<div class="tile" v-for="blog in blogData" :key="blog">
				<a :href="blog.url" target="_blank">
					<img :src="blog.image" :alt="blog.title" class="image">
					<div class="text">
						<span><strong>{{ blog.title }} &ndash; </strong></span>
						<span>{{ toText(blog.description).slice(0, 100) }}...</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Blog',
	props: {
		limit: Number
	},
	data() {
		return {
			blogData: []
		}
	},
	methods: {
		toText(htmlText) {
			let plainText = document.createElement('div')
			plainText.innerHTML = htmlText
			htmlText = plainText.innerText
			return htmlText
		}
	},
	beforeMount() {
		let referenceThis = this
		let httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				referenceThis.blogData = JSON.parse(this.responseText);
			}
		};
		httpRequest.open("GET", "https://cutc.ca/api/html/mediumPosts.php", true);
		httpRequest.send();
	}
}
</script>

<style scoped>
#blog {
	max-width: 1120px;
	margin: auto;
}

a {
	color: var(--main-color);
}

router-link {
	text-decoration: underline;
}

.header {
	display: flex;
	align-items: baseline;
	grid-column-gap: 40px;
	margin-bottom: 0.5rem;
}

.more {
	text-decoration: underline;
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 3rem;
}

.tile {
	position: relative;
}

.text {
	color: black;
	text-decoration: none;
	margin-top: 0.5rem;
	line-height: 130%;
}

.image {
	position: relative;
	max-width: 100%;
	height: auto;
	transition: transform .2s;
}

.image:hover {
	transform: scale(0.9);
}

@media screen and (max-width: 850px) {
	.grid {
		row-gap: 2rem;
		grid-template-columns: 1fr;
	}
	.header {
		white-space: pre-line;
	}
}
</style>