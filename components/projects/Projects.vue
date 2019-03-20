<template>
<section class="container">
  <div class="projects">
    <project-card v-for="p in projects" :project="p" :key="p.title" />
  </div>
</section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'Projects',
  components: { ProjectCard },
  data() {
    return {
      projects : [
        {
          title: "Um título vem aqui",
          description: "Uma descrição vem aqui",
          site: "https://github.com/lukehxh",
          class: "even"
        },
        {
          title: "Usjaodb dfhdf sdfusdf",
          description: "Uma descrição vem aqui",
          site: "https://github.com/lukehxh",
          class: "odd"
        },
        {
          title: "Terceiro projeto",
          description: "Uma descrição vem aqui",
          site: "https://github.com/lukehxh",
          class: "even"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.projects {
  background-color: red;
  height: 75vh;
  display: flex;
  flex-direction: row;
}
</style>
 