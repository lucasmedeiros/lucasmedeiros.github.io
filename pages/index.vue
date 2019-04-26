<template>
  <div id="app">
    <Intro />
    <About />
    <Projects />
    <PageFooter />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import About from '~/components/about/About.vue'
import Projects from '~/components/projects/Projects.vue'
import PageFooter from '~/components/footer/PageFooter.vue'

export default {
  components: {
    Intro, About, Projects, PageFooter
  }
}
</script>
