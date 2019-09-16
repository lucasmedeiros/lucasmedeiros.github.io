<template>
  <div class="container">
    <social-media />
    <p class="copyright">Lucas Medeiros © 2019</p>
  </div>
</template>

<script>
import SocialMedia from '../social_media/SocialMedia.vue';

export default {
    name: 'BottomFooter',
    components: { SocialMedia },
}
</script>

<style scoped>
.container {
  min-height: 10vh;
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
