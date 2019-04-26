<template>
  <footer class="footer wrap">
    <div class="footerContent">
      <left-footer class="grid-item" />
      <middle-footer />
      <right-footer class="grid-item" />
    </div>
  </footer>
</template>

<script>
import LeftFooter from './LeftFooter.vue';
import MiddleFooter from './MiddleFooter.vue';
import RightFooter from './RightFooter.vue';

export default {
  name: 'PageFooter',
  components: { LeftFooter, MiddleFooter, RightFooter }
}
</script>

<style scoped>
.footer {
  min-height: 20vh;
  color: white;
  background-color: rgb(10, 10, 10);
}

.footerContent {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
}

.grid-item {
  padding: 5px;
}

@media (max-width: 820px) {
  .footerContent {
    grid-template-columns: 1fr;
  }

  .left {
    grid-template-columns: 1fr;
  }
}
</style>
