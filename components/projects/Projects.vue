<template>
<section class="container wrap">
  <h1 class="sectionTitle">Some projects</h1>
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
          classes: ['card', 'even']
        },
        {
          title: "Usjaodb dfhdf sdfusdf",
          description: "Uma descrição vem aqui",
          site: "https://github.com/lukehxh",
          classes: ['card', 'odd']
        },
        {
          title: "Terceiro projeto",
          description: "Uma descrição vem aqui porque eu simplesmente não sei o que escrever",
          site: "https://github.com/lukehxh",
          classes: ['card', 'even']
        },
        {
          title: "Comments Section",
          description: "Pequeno sistema de comentários simples com JQuery e PHP, com conexão a banco de dados com MySQL.",
          site: "https://github.com/lukehxh",
          classes: ['card', 'odd']
        },
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
  height: 50vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
 