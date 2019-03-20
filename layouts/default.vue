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
  text-transform: uppercase;
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
  padding: 1.5em 5em 1.5em 5em;
}

@media (max-width: 800px) {
  .wrap {
    padding: 2.8em;
  }
}

@font-face {
  font-family: 'ProximaNova';
  src: url("~assets/fonts/Proxima_Nova_Semibold.otf");
}
</style>
