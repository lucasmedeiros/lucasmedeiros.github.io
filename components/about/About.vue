<template>
  <section class="about wrap">
    <h1 class="sectionTitle">About me</h1>

    <div class="info">
      <div class="text">
        <p>
          My full name's Lucas de Medeiros Nunes Fernandes and I'm
          {{ calculateAge() }} years old and I live in Campina Grande
          - PB, Brazil. I'm a Computer Technician at IFRN - Campus
          Caicó since 2016, and currently I'm an undergraduate student
          in Computer Science at Federal University of Campina Grande (UFCG).
        </p>

        <p>
          Besides computing, I love football (or soccer, whatever) and I'm a 
          Flamengo supporter. I also love music (I have such an ecletic taste
          in music) and gaming.
        </p>

        <p>
          I am experienced with mobile (Android) software development, and web
          development with HTML, CSS, JavaScript, PHP and connection with SQL
          database, as well Vue.js, Bootstrap, JUnit and jQuery frameworks. I'm
          familiarized with Java, JavaScript and Python programming languages.
          Some of my interests include full stack web development (HTML, 
          JS/JQuery, CSS, PHP and database connection with SQL), Java, 
          Python and C/C++.
        </p>
      </div>

      <div class="skill">
        My skills go here...
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
.about {
  min-height: 75vh;
}

.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5vw;
  margin: auto;
  color: #555;
  line-height: 1.5;
  grid-auto-rows: minmax(min-content, max-content);
}

.text {
  max-width: 65ch;
}

.text p {
  margin-bottom: 1rem;
}

@media (max-width: 820px) {
  .info {
    grid-template-columns: 1fr;
    padding: 30px 20px 30px 20px;
  }
}
</style>


