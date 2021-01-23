<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  // computed: {
  //   cssVars() {
  //     // Dark Blue: #12232E
  //     // Lighter Blue: #007CC7
  //     // Lightest Blue: #4DA8DA
  //     // Shadow of Dark Blue: #203647
  //     // Shadow of Light Blue: #EEFBFB
  //     return {
  //       "--body-theme-layoyt": this.shadowDarkBlue,
  //     };
  //   },
  // },
};
</script>

<style>
* {
  --shadow-light-blue: #eefbfb;
  --shadow-dark-blue: #203647;
  --lightest-blue: #4DA8DA;
  --lighter-blue: #007CC7;
  --dark-blue: #12232E;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: var(--lightest-blue);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
