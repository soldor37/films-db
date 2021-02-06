<template>
  <div class="container">
    <div class="center grid">
      <vs-row type="flex" justify="center" align="center">
        <vs-col
          type="flex"
          justify="center"
          align="center"
          w="10"
          class="content-wrapper"
        >
          <div class="popular-slider">
            <vs-card-group v-if="popular">
              <div v-for="film in popular" :key="film.id" class="film">
                <film-card :film-info="film" />
              </div>
            </vs-card-group>
          </div>
          <vs-row type="flex" align="center">
            <vs-col
              type="flex"
              justify="center"
              align="center"
              w="10"
              class="main"
            >
              <vs-row type="flex" align="center">
                <vs-col
                  type="flex"
                  justify="center"
                  align="center"
                  w="5"
                  class="latest"
                  v-for="film in popular"
                  :key="film.id"
                >
                  <film-card :film-info="film" /> </vs-col
              ></vs-row>
              <vs-row type="flex" align="center">
                <vs-col
                  type="flex"
                  justify="center"
                  align="center"
                  w="5"
                  class="upcoming"
                  v-for="film in popular"
                  :key="film.id"
                >
                  <film-card :film-info="film" /> </vs-col
              ></vs-row>
            </vs-col>
          </vs-row> </vs-col
      ></vs-row>
    </div>
  </div>
</template>

<script>
import filmCard from "@/components/filmCard";
export default {
  name: "index",
  components: {
    filmCard,
  },
  data() {
    return {
      popular: [],
    };
  },
  methods: {
    async getPopular() {
      const list = await this.$axios.$get(
        `/movie/popular?api_key=${this.$store.getters.getApiKey}&language=${this.$store.getters.getLang}&page=1`
      );
      this.popular = list.results.slice(0, 10);
    },
  },
  created() {
    this.getPopular();
  },
};
</script>

<style lang="scss" scoped>
.container {
}
.content-wrapper {
  flex-direction: column;
}
.popular-slider {
  padding: 24px 0;
  margin: 12px 0;
  background: var(--shadow-light-blue);
  border-radius: 15px;
}
.film {
  width: 100%;
}
</style>