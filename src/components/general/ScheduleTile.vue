<template>
	<div class="background" :style="{'--type-color': colors[type]}">
		<div class="strip"></div>
		<div class="content">
			<div class="top-bar">
				<button><img src="@/assets/schedule/addButton.svg" alt="Add to Calendar"></button>
				<h3>{{ title }}</h3>
				<div class="top-info">
					<div class="top-info-section">
						<img src="@/assets/schedule/clock.svg" alt="Time">
						<p>{{ timestamp }}</p>
					</div>
					<div class="top-info-section">
						<img src="@/assets/schedule/location.svg" alt="Location">
						<p>{{ location }}</p>
					</div>
					<div class="top-info-section">
						<p v-for="tag in tags" :key="tag" class="tag">{{ tag }}</p>
					</div>
				</div>
			</div>
			<p>{{ description }}</p>
			<div class="speakers"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ScheduleTile",
	props: {
		title: String,
		description: String,
		type: {
			default: '',
			type: String,
		},
		location: String,
		timestamp: String,
		tags: Array,
		speakers: Array,
	},

	data() {
		return {
			colors: {
				'topic 1': '#8394F2',
				'topic 2': '#F57A75',
				'topic 3': '#17ADCE',
				'topic 4': '#F9AFAB',
				'': '#44AF69', // Misx
			}
		}
	}
}
</script>

<style scoped>
.background {
	margin: 1rem;
	border: 1px solid grey;
	border-radius: 16px;
}

.strip {
	height: 100%;
	width: 1rem;
	background-color: var(--type-color);
}

.content {
	padding: 1rem;
	color: black;
}

/* .top-bar {} */

.top-bar>button {
	float: right;
	background: none;
	border: none;
}

.top-info {
	display: flex;
	flex-wrap: wrap;
}
.top-info>:not(:last-child) {
	margin-right: 2rem;
}

.top-info-section {
	display: flex;
	flex-wrap: wrap;
}
.top-info-section>:not(:last-child)  {
	margin-right: .5rem
}
/* Icons */
.top-info-section>img {
	width: .7rem;
}

.tag {
	padding: .25rem 1rem;
	border-radius: 50rem;
	background: var(--type-color);

	color: white;
	font-size: .8rem;
}
</style>