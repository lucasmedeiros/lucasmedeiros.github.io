<template>
<section :class="project.classes">
  <a :href="project.site" target="_blank">
    <p class="projectTitle">{{ project.title }}</p>
    <p class="projectDescription">{{ project.description }}</p>
  </a>
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
}

a {
  text-decoration: none;
  color: white;
  height: 100%;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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

  .projectDescription {
    max-width: 20vw;
  }
}
</style>
