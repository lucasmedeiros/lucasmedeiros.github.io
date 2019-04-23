<template>
  <div id="app">
    <Intro />
    <About />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import About from '~/components/about/About.vue'
import Projects from '~/components/projects/Projects.vue'
import Footer from '~/components/footer/Footer.vue'

export default {
  components: {
    Intro, About, Projects, Footer
  }
}
</script>
