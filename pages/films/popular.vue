<template>
  <div class="container">
    <div class="center grid">
      <vs-row type="flex" justify="center" align="center">
        <vs-col
          type="flex"
          justify="center"
          align="center"
          w="10"
          class="films-wrapper"
        >
          <vs-row class="films" v-if="moviesList">
            <vs-col
              v-for="film in moviesList.results"
              :key="film.id"
              class="film"
              lg="3"
              sm="6"
              xs="12"
            >
              <film-card :film-info="film" />
            </vs-col>
            <vs-col w="12"
              ><div class="center con-pagination">
                <div class="wrapper">
                  <vs-pagination color="#007cc7" v-model="page" :length="20" />
                </div>
              </div>
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

      page: 1,
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
    margin: 12px 0;
    background: var(--shadow-light-blue);
    border-radius: 15px;

    .film {
      // width: 25%;
      padding: 0 8px;
      margin-bottom: 16px;
    }
    .con-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      .wrapper{
        background: white;
        border-radius: 15px;
        padding: 6px;
      }
    }
  }
}
</style>
