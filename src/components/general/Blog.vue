<template>
	<div id="blog">
		<h2>Our Blog</h2>
		<div class="grid">
			<div class="tile" v-for="blog in blogData" :key="blog">
				<a :href="blog.url" target="_blank">
					<img :src="blog.image" :alt="blog.title" class="image" width="305" height="175">
					<div class="text">
						<span><strong>{{ blog.title }} &ndash; </strong></span>
						<span>{{ toText(blog.description).slice(0, 100) }}...</span>
					</div>
				</a>
			</div>
		</div>
		<div v-if="limit" class="view-more">
			<router-link to="/blog">View all articles</router-link>
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
		let self = this
		let httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				self.blogData = JSON.parse(this.responseText);
				if (self.limit)
					self.blogData = self.blogData.slice(0, self.limit);
			}
		};
		httpRequest.open("GET", "https://cutc.ca/api/html/mediumPosts.php", true);
		httpRequest.send();
	}
}
</script>

<style scoped>
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
}
</style>