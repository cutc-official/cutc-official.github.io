<template>
	<div id="blog">
		<div class="header">
			<h2>Our Blog</h2>
			<router-link v-if="limit" to="/blog">View all articles ></router-link>
		</div>

		<div class="grid" ref="grid">
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
		httpRequest.open("GET", "http://test.cutc.ca/mediumPosts.php", true);
		httpRequest.send();
	}
}
</script>

<style scoped>
#blog {
	max-width: 1120px;
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
	font-weight: 600px;
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5vh 10vw;
}

.tile {
	position: relative;
}

.text {
	color: black;
	text-decoration: none;
	margin-bottom: 5%;
}

.image {
	position: relative;
	max-width: 100%;
  height: auto;
}

@media screen and (max-width: 850px) {
	.grid {
		display: table;
		gap: 3vh 6vw;
		grid-template-columns: 1fr 1fr;
	}
	.header {
		white-space: pre-line;
	}
}


@media screen and (max-width: 750px) {
	.grid {
		display: table;
		gap: 3vh 6vw;
		grid-template-columns: 1fr 1fr;
	}
	.header {
		white-space: pre-line;
	}
	.image {
	position: relative;
	width: 100%;
	height: 10%;
	}
}

@media screen and (max-width: 650px) {
	.grid {
		display: table;
		gap: 3vh 6vw;
		grid-template-columns: 1fr 1fr;
	}
	.header {
		white-space: pre-line;
	}
	.image {
	position: relative;
	width: 100%;
	height: 10%;
	}
}

@media screen and (max-width: 550px) {
	.image {
		--icon-width: 1rem;
	}
}
</style>