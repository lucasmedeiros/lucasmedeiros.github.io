<template>
  <div class="container">
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
    <p class="copyright">Lucas Medeiros © 2019</p>
  </div>
</template>

<script>
export default {
    name: 'BottomFooter'
}
</script>

<style scoped>
.container {
  background-color: rgb(10, 10, 10);
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.icons {
  letter-spacing: 10px;
}

.icons a {
  font-size: 1.7em;
  color: white;
}

.copyright {
  color: white;
  letter-spacing: 1px;
}
</style>
