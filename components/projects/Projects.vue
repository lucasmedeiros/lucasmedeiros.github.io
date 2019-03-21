<template>
<section class="container wrap">
  <h1 class="sectionTitle">Notable works</h1>
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
          title: "OpenDev UFCG Website",
          description: "Website for showing important information about the OpenDevUFCG organization.",
          site: "https://opendevufcg.org/",
          classes: ['card', 'even']
        },
        {
          title: "Laboratório de Matemática",
          description: "Web system for a course focused on preparing students for ENEM.",
          site: "http://labdematematica.com.br/",
          classes: ['card', 'odd']
        },
        {
          title: "CCC Pharma App",
          description: "Management web system for a new pharmacy in Campina Grande.",
          site: "http://cccpharma-site-jjlm.herokuapp.com/",
          classes: ['card', 'even']
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
 