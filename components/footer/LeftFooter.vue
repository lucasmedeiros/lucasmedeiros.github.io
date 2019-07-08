<template>
  <div class="container">
    <div>
      <p class="bold title">Contact</p>
      <ul class="no-style-ul">
        <li>
          <font-awesome-icon :icon="['fas', 'envelope']"/>
          <span class="contact">lucasmed812@gmail.com</span>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'envelope']"/>
          <span class="contact">lucas.medeiros.fernandes@ccc.ufcg.edu.br</span>
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'whatsapp']"/>
          <span class="contact">+55 (84) 99921-3854</span>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          <span class="contact">Campina Grande, Brazil</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftFooter'
}
</script>

<style scoped>
.container {
  font-family: 'ProximaNova';
  color: white;
}

li {
  margin-bottom: 3px;
}

.contact {
  padding: 4px;
}

span {
  word-break: break-word;
  text-overflow: ellipsis;
}
</style>
