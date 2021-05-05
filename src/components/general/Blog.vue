<template>
	<div class="blog">
		<div class="header">
			<h2>Our Blog</h2>
			<router-link v-if="limit" to="/blog">View all articles ></router-link>
		</div>

		<div class="grid" ref="grid">
			<div class="tile" v-for="blog in blogData" :key="blog">
				<a :href="blog.url" target="_blank">
					<div class="image">
						<img :src="blog.image" :alt="blog.title">
					</div>
					<div class="text">
						<h3>{{ blog.title }}</h3>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import blogData from '@/content/blogData.json';

export default {
	name: 'Blog',
	props: {
		limit: Number
	},
	data() {
		return {
			blogData: blogData
		}
	}
}
</script>

<style scoped>
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
	gap: 3vh 6vw;
}

.tile {
	position: relative;
}

.text {
	color: black;
	text-decoration: none;
}

.image {
	position: relative;
	width: 50%;
	height: 90%;
}

@media screen and (max-width: 850px) {
	.grid {
		display: table;
		grid-template-columns: 1fr 1fr;
	}
	.header {
		white-space: pre-line;
	}
}
@media screen and (max-width: 550px) {
	.image {
		--icon-width: 1rem;
	}
}
</style>