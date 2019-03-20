<template>
<section :class="project.classes">
  <a class="projectTitle" :href="project.site" target="_blank">
    {{ project.title }}
  </a>
  <p class="projectDescription">{{ project.description }}</p>
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
  align-items: center;
  text-align: center;
  flex: 1 1;
  transition: .5s;
  flex-shrink: 0;
  color: white;
  padding: 3em;
}

.projectTitle {
  font-family: 'ProximaNova';
  text-decoration: none;
  font-size: 1.5em;
  min-height: 12vh;
  margin-bottom: 1em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  color: white;
}

.projectDescription {
  line-height: 1.5;
}

.even {
  background-color: rgb(20, 20, 20);
}

.odd {
  background-color: rgb(60, 60, 60);
}

@media (min-width: 900px) {
  .card:hover {
    flex: 2 1;
  }
}
</style>
