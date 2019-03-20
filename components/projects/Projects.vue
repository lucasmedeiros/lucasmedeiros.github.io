<template>
<section class="container wrap">
  <h1 class="sectionTitle">Notable projects</h1>
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
          title: "OpenDev UFCG Website",
          description: "Website for showing important information about the OpenDevUFCG organization.",
          site: "https://opendevufcg.org/",
          classes: ['card', 'odd']
        },
        {
          title: "Laboratório de Matemática",
          description: "Web system for a course focused on preparing students for ENEM.",
          site: "http://labdematematica.com.br/",
          classes: ['card', 'even']
        },
        {
          title: "Project Manager",
          description: "Small project manager made with HTML, JQuery/AJAX, PHP, MySQL, designed with CSS3 and Bootstrap.",
          site: "https://github.com/LukeHxH/ProjectManager",
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
  height: 55vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
 