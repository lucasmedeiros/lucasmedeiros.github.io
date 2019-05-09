<template>
  <section class="about wrap">
    <h1 class="sectionTitle uppercase">About me</h1>
    <div class="info">
      <AboutText />
      <AboutSkills />
    </div>
  </section>
</template>

<script>
import AboutText from './AboutText.vue'
import AboutSkills from './AboutSkills.vue'

export default {
  name: 'About',
  components: {
    AboutText, AboutSkills
  }
}
</script>

<style scoped>
.about {
  min-height: 2vh;
}

.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
  margin: auto;
  color: #555;
  line-height: 1.5;
  letter-spacing: .05em;
  grid-auto-rows: minmax(min-content, max-content);
}

@media (max-width: 820px) {
  .info {
    grid-template-columns: 1fr;
    padding: 30px 20px 30px 20px;
  }
}
</style>


