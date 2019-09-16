<template>
  <article class="icons">
    <a href="https://www.github.com/lucasmedeiros/" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']"/>
    </a>
    <a href="https://dev.to/lukehxh" target="_blank">
      <font-awesome-icon :icon="['fab', 'dev']"/>
    </a>
    <a href="https://www.linkedin.com/in/lucasmnf/" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']"/>
    </a>
    <a href="https://www.youtube.com/channel/UCLlxw0ys56q3t0JJhPOw4-w/videos" target="_blank">
      <font-awesome-icon :icon="['fab', 'youtube']"/>
    </a>
    <a href="https://www.facebook.com/lucas.pmm" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook']"/>
    </a>
    <a href="https://www.instagram.com/lukehxh/" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']"/>
    </a>
  </article>
</template>

<script>
export default {
  name: 'SocialMedia',
}
</script>

<style scoped>
.icons {
  letter-spacing: 10px;
}

.icons a {
  font-size: 1.7em;
  color: white;
}
</style>