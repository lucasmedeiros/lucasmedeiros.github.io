<template>
  <footer class="footer">
    <div class="footerContent wrap">
      <left-footer class="grid-item" />
      <right-footer class="grid-item" />
    </div>
    <bottom-footer />
  </footer>
</template>

<script>
import LeftFooter from './LeftFooter.vue';
import RightFooter from './RightFooter.vue';
import BottomFooter from './BottomFooter.vue';

export default {
  name: 'PageFooter',
  components: { LeftFooter, RightFooter, BottomFooter }
}
</script>

<style scoped>
.footer {
  min-height: 20vh;
  color: white;
  background-color: rgb(25, 25, 25);
}

.footerContent {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

@media (max-width: 760px) {
  .footerContent {
    grid-template-columns: 1fr;
  }

  .left {
    grid-template-columns: 1fr;
  }

  .grid-item {
    align-items: flex-start;
  }
}
</style>
