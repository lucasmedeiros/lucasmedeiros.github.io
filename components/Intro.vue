<template>
  <section class="container">
    <div class="header">
      <img src="~/assets/photo.jpg" alt="Minha foto" class="photo">
      <h1 class="title">Lucas Medeiros</h1>
      <h5 class="subtitle">Full-stack software development</h5>
      <div class="icons">
        <a href="https://www.linkedin.com/in/lucasmnf/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://www.github.com/lukehxh/" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
        <a href="https://www.facebook.com/lucas.pmm" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']"/>
        </a>
        <a href="https://twitter.com/lukehxh" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.instagram.com/lukehxh/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </a>
      </div>
      <scroll-down idPath="#about" />
    </div>
  </section>
</template>

<script>
import ScrollDown from './ScrollDown.vue';

export default {
  name: "Intro",
  components: { ScrollDown },
}
</script>

<style scoped>
.container {
  font-family: 'ProximaNova';
  background-image: url('~assets/background.jpg');
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.photo {
  max-width: 30vh;
  border-radius: 360px;
  box-shadow: 0px 5px 10px rgba(0,0,0,.5);
}

.title {
  display: block;
  font-weight: 300;
  font-size: 5em;
  letter-spacing: 1px;
  margin: 20px 0px 20px 0px;
}

.subtitle {
  font-family: 'ProximaNova';
  font-size: 1.5em;
  letter-spacing: .2em;
}

.icons {
  margin-top: 2vh;
  letter-spacing: 10px;
}

.icons a {
  font-size: 1.7em;
  color: white;
}

@media (max-width: 600px) {

  .photo {
    max-width: 25vh;
  }

  .title {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1em;
  }
}
</style>
