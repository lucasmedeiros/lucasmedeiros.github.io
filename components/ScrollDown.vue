<template>
  <a :href="idPath" class="scroll-down" v-smooth-scroll="smoothProperties" address="true" />
</template>

<script>

export default {
  name: 'ScrollDown',
  props: {
    idPath: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      smoothProperties: {
        duration: 1500,
        offset: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-down {
  opacity: 1;
  position: absolute;
  bottom: 30px;
  left: 50%;
  background-color: #fff;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 2;
  transition: all 0.5s ease-in 3s;
  animation: bounce 2s infinite 2s;
  transform: scale(1);
}

.scroll-down:before {
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 6px);
  transform: rotate(-45deg);
  display: block;
  width: 12px;
  height: 12px;
  content: '';
  border: 2px solid rgb(40, 40, 40);
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-top-width: 0;
  border-right-width: 0;
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
