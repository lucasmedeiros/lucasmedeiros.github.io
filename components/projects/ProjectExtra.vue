<template>
<article class="card">
	<div class="card-title">
		<h4>{{ project.title }}</h4>
	</div>
	<div class="card-content">
		<p> {{ project.description }} </p>
	</div>
	<button class="bold" v-on:click="accessSite(project.site)"> See more </button>
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
	border: 1px solid rgb(100, 100, 100);
	border-radius: .25rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card-title {
	padding: 1em;
	font-family: 'Inconsolata', monospace;
}

.card-content {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	font-size: .9em;
	padding: 1em;
}

button {
	color: #fff;
  background-color: rgb(20, 20, 20);;
  border: none;
	font-size: 1.4em;
  padding: .5rem 1rem;
  cursor: pointer;
}
</style>
