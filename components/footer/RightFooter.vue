<template>
  <div class="container">
    <div>
      <p class="bold title">Address</p>
      <ul class="no-style-ul">
        <li>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          <span class="oblique">263 José de Alencar St, 202 apartment, Campina Grande, PB, BR</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightFooter'
}
</script>

<style scoped>
.container {
  font-family: 'ProximaNova';
  color: white;
}
</style>
