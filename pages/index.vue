<template>
  <div id="app">
    <Intro />
    <About />
    <Projects />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import About from '~/components/about/About.vue'
import Projects from '~/components/projects/Projects.vue'

export default {
  components: {
    Intro, About, Projects
  }
}
</script>
