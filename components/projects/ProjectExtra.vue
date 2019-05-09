<template>
<article class="card">
	<div class="card-title">
		<h4>{{ project.title }}</h4>
	</div>
	<div class="card-content">
		<p> {{ project.description }} </p>
	</div>
	<button class="bold uppercase" v-on:click="accessSite(project.site)"> Access </button>
</article>
</template>

<script>

const goTo = (url) => {
	window.open(url, '_blank');
}

export default {
	name: 'ProjectExtra',
	props: {
		project: {
			type: Object,
			default: null,
		},
	},
	methods: {
		accessSite: (siteUrl) => {
			goTo(siteUrl);
		},
	}
}
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 20px 20px;
	border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
}

.card-title {
	padding: 1.2em 0 0 0;
	font-size: 1.2em;
	font-family: 'Inconsolata', monospace;
}

.card-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 20vh;
	padding: 1em;
}

button {
	color: white;
  background-color: rgb(60, 60, 60);
  border: none;
	font-size: 1.2em;
	padding: 10px;
	width: 100%;
  cursor: pointer;
	transition: all .25s;
}

button:hover {
	background-color: rgb(40, 40, 40);
}
</style>
