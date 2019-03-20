<template>
<section class="card" :class="project.class">
  <a :href="project.site" target="_blank">
    {{ project.title }}
  </a>
  <p>{{ project.description }}</p>
</section>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1;
  transition: .5s;
  color: white;
}

.active {
  flex: 100% 1 !important;
}

.even {
  background-color: rgb(20, 20, 20);
}

.odd {
  background-color: darkslategray;
}

.card:hover {
  flex: 2 1;
}
</style>
