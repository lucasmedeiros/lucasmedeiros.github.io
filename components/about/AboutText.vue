<template>
  <div class="text">
      <p>
        My full name's Lucas de Medeiros Nunes Fernandes, I'm
        {{ calculateAge() }} years old and I live in Campina Grande
        - PB, Brazil. I'm a Computer Technician at IFRN - Campus
        Caicó since 2016, and currently I'm an undergraduate student
        in Computer Science at 
        <a href="https://portal.ufcg.edu.br/" target="_blank">
        Federal University of Campina Grande (UFCG)</a>.
      </p>
      
      <p>
        I've experienced mobile (Android) software development due to 
        projects I've participated while studying at IFRN, working on an 
        educational game focused on making math learning more fun, and an 
        application for controlling electronic circuits via Wi-Fi.
      </p>

      <p>
        My web development experience also started at IFRN with HTML, CSS,
        JavaScript, PHP and connection with SQL database. Since then, I improved
        myself about all of these technologies, mainly the last JavaScript
        updates (ES6 and further) and PHP 7. I've also experienced Vue/Nuxt, a modern
        web development framework, as I entered
        <a href="https://github.com/OpenDevUFCG/" target="_blank">
          OpenDevUFCG organization</a>.
      </p>

      <p>
        Besides Computer Science, I love football (or soccer, whatever) and I'm a 
        Flamengo supporter. I also love music and gaming.
      </p>
  </div>
</template>

<script>
export default {
  name: 'Text',
  methods: {
      calculateAge() {
      let birth = new Date('06/29/1998');
      let today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      let m = today.getMonth() - birth.getMonth();

      if (m < 0 || (m == 0 && today.getDate() < birth.getDate())) {
          age--;
      }

      return age;
    }
  }
}
</script>


<style scoped>
.text {
  display: flex;
  flex-direction: column;
}

.text p {
  margin-bottom: 1rem;
}
</style>
