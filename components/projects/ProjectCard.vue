<template>
<section :class="project.classes" class="wrap">
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
  flex: 1 1;
  transition: .5s;
  flex-shrink: 0;
  color: white;
}

.projectTitle {
  font-family: 'ProximaNova';
  text-align: center; 
  text-decoration: none;
  font-size: 1.5em;
  margin-bottom: 1em;
  color: white;
}

.projectDescription {
  text-align: justify;
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
