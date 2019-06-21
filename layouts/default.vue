<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.sectionTitle {
  width: 100%;
  margin-bottom: 20px;
  font-size: 2.5em;
  text-align: center;
  color: rgb(45, 45, 45);
}

a {
  text-decoration: none;
  color: darkcyan;
}

a:hover {
  text-decoration: underline;
}

.wrap {
  padding: 2em 5em 2em 5em;
}

.title {
  font-size: 2em;
  margin-bottom: 8px;
}

.bold {
  font-weight: bold;
}

.oblique {
  font-style: oblique;
}

.uppercase {
  text-transform: uppercase;
}

.text-align-left {
  text-align: left;
}

.text-align-right {
  text-align: right;
}

.text-align-center {
  text-align: center;
}

.no-style-ul {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}

html::-webkit-scrollbar-track {
  background-color: aliceblue;
}

html::-webkit-scrollbar {
  background-color: #fff;
  width: 6px;
}

html::-webkit-scrollbar-thumb {
  background-color: rgb(10, 10, 10);
}

@media (max-width: 800px) {
  .wrap {
    padding: 1.5em;
  }
}

@font-face {
  font-family: 'ProximaNova';
  src: url("~assets/fonts/Proxima_Nova_Semibold.otf");
}
</style>
