<template>
  <div>
    <vs-navbar
      color="#12232e"
      text-white
      fixed
      shadow
      shadowScroll
      center-collapsed
    >
      <template #left>
        <vs-navbar-item to="/" :active="$route.name == 'index'" id="index">
          <i class="bx bx-home" style="font-size: 22px"></i>
        </vs-navbar-item>
        <vs-navbar-item
          to="/films/popular"
          :active="$route.name == 'films-popular'"
          id="popular"
        >
          Popular
        </vs-navbar-item>
        <vs-navbar-item to="/films/new" :active="$route.name == 'films-new'">
          New
        </vs-navbar-item>
      </template>
    </vs-navbar>
    <div class="content"><Nuxt /></div>
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
  --lightest-blue: #4da8da;
  --lighter-blue: #007cc7;
  --dark-blue: #12232e;
}
html {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body {
  background: rgb(238, 251, 251);
  background: radial-gradient(
    circle,
    rgba(238, 251, 251, 1) 0%,
    rgba(77, 168, 218, 1) 50%,
    rgba(0, 124, 199, 1) 100%
  );
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  padding-top: 44px;
}
</style>
