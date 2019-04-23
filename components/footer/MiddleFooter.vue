<template>
  <div class="container">
    <p class="bold title">Address</p>
    <ul class="no-style-ul">
      <li>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
        <span class="oblique">263 José de Alencar St, 202 apartment, Campina Grande, PB, BR</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MiddleFooter'
}
</script>

<style scoped>
.container {
  font-family: 'ProximaNova';
  color: white;
}
</style>
