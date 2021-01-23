<template>
  <div class="container">
    <div class="center grid">
      <vs-row type="flex" justify="center" align="center">
        <vs-col type="flex" justify="center" align="center" w="10">
          <vs-row class="films" v-if="moviesList">
            <vs-col v-for="film in moviesList.results" :key="film.id" class="film"  lg='3' sm='6' xs='12'>
              <film-card :film-info="film" />
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import filmCard from "@/components/filmCard";
export default {
  name: "Popular",
  components: {
    filmCard,
  },
  data() {
    return {
      apiKey: "bcbc69d35e63a4cf19b4dcec5bacaa14",
      moviesList: null,
    };
  },
  created() {
    this.getFilms();
  },
  methods: {
    async getFilms() {
      const moviesList = await this.$axios.$get(
        `/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
      );
      console.log(moviesList);
      this.moviesList = moviesList;
      // return new Promise((resolve, reject) => {
      //   axios
      //     .get(
      //       `/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
      //     )
      //     .then((resp) => {
      //       this.moviesList = resp.data;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .films {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 24px 0;
    .film {
      // width: 25%;
      padding: 0 8px;
      margin-bottom: 16px;
    }
  }
}
</style>
