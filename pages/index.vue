<template>
  <div id="app">
    <Intro />
    <Projects />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Projects from '~/components/projects/Projects.vue'

export default {
  components: {
    Intro, Projects
  }
}
</script>
