<template>
<section class="container wrap">
  <h1 class="sectionTitle uppercase">Notable works</h1>
  <div class="main-projects">
    <project-card v-for="proj in mainProjects" :project="proj" :key="proj.title" />
  </div>

  <h1 class="sectionTitle uppercase">Other projects</h1>
  <div class="other-projects">
    <project-extra v-for="otherProj in otherProjects" :project="otherProj" :key="otherProj.title" />
  </div>
  <p class="more-paragraph">
    If you want to see more, visit my <a href="https://github.com/LukeHxH" target="_blank">Github page</a>.
  </p>
</section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import ProjectExtra from './ProjectExtra.vue';
import projects from './projects';

const mainProjects = projects.mainProjects;
const otherProjects = projects.otherProjects;

export default {
  name: 'Projects',
  components: { ProjectCard, ProjectExtra },
  data() {
    return {
      mainProjects,
      otherProjects
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.main-projects {
  min-height: 35vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.other-projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: inherit;
  grid-gap: 1em;
  align-items: stretch;
}

.more-paragraph {
  margin-top: 10px;
}

@media (max-width: 780px) {
  .other-projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 425px) {
  .other-projects {
    grid-template-columns: 12fr;
  }
}

</style>
 
