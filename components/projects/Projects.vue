<template>
<section class="container wrap">
  <h1 class="sectionTitle">Notable works</h1>
  <div class="projects">
    <project-card v-for="proj in mainProjects" :project="proj" :key="proj.title" />
  </div>
  <p>
    If you want to see more, visit my <a href="https://github.com/LukeHxH" target="_blank">Github page</a>.
  </p>
</section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'Projects',
  components: { ProjectCard },
  data() {
    return {
      mainProjects : [
        {
          title: "OpenDev UFCG Website",
          description: "Website for showing important information about OpenDevUFCG.",
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
      ],

      otherProjects : [
        {
          title: "",
          description: "",
          site: ""
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
  min-height: 45vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
  margin-top: 5px;
}

</style>
 