<template>
  <div class="container">
    <div class="films">
      <div v-for="film in moviesList" :key="film.id" class="film">
        <film-card :film-info="film" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import filmCard from "@/components/filmCard";
export default {
  name: "Test",
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
    getFilms() {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
          )
          .then((resp) => {
            this.moviesList = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
