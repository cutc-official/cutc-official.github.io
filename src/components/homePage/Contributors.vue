<template>
	<div id="contributors">
		<div>
			<h2 style="display: inline;">Created with love in &nbsp;</h2>
			<img style="display: inline;" src="@/assets/misc/Canada.png" />
			<h2 style="display: inline;">&nbsp; by</h2>
		</div>
		<div class="gallery">
			<div class="parent" v-for="(member,index) in members" :key="member.name">
				<div @mouseleave="popUp = -1" @mouseover="open(index)" style="text-decoration: none;">
					<transition name="fade">
						<div class="dialog" v-if="popUp===index">
							<div class="name">{{member.name}} {{member.emoji}}</div>
							<div class="position">{{member.position}}</div>
							<div class="rectangle"></div>
						</div>
					</transition>

					<img class="image" :src="getImage(member)"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Members from "@/content/contributors.json";
Members.sort((a, b) => a.name.localeCompare(b.name));

export default {
	name: "Contributors",
	data() {
		return { members: Members, popUp: -1 };
	},
	methods: {
		open: function(popped) {
			this.popUp = popped;
		},
		getImage(member) {
			if ('image' in member)
				return require(`@/assets/contributors/${member.image}`);
			else
				return require("@/assets/contributors/anon.png");
		}
	}
};
</script>

<style scoped>
#contributors {
	color: black;
	margin-top: 5rem;
}

.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(7rem, 5fr));
	margin-top: 2rem;
}
.parent {
	position: relative;
}
.image {
	max-height: 5rem;
	margin: 1em 2em;
	border-radius: 50%;
}
.dialog {
	position: absolute;
	top: -3rem;
	left: 2rem;
	z-index: 1;
	padding: 0.2rem 15% 5% 0.5rem;
	width: max-content;
	max-width: 100%;
	color: black;
	background: #b3160d;
}
.rectangle {
	width: 0.75rem;
	height: 0.75rem;
	position: absolute;
	background: #b3160d;
	transform: rotate(45deg);
	top: 85%;
	z-index: -1;
}
.name {
	color: white;
	font-weight: bold;
}

.position {
	color: white;
	font-size: 0.8rem;
}
</style>