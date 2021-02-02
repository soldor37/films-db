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
              ><div class="title">{{lang == 'en' ? 'Popular movies' : 'Популярные'}}</div>
              <div class="subtitle">{{lang == 'en' ? '(this list updates daily)' : '(список обновляется ежедневно)'}}</div></vs-col
            >
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
      const loading = this.$vs.loading({
        type: 'square',
        color: "#007cc7",
      });
      const moviesList = await this.$axios.$get(
        `/movie/popular?api_key=${this.apiKey}&language=${this.$store.getters.getLang}&page=${this.page}`
      );
      this.moviesList = moviesList;
      loading.close();
    },
  },
  watch:{
    page(){
      this.getFilms();
    }
  },
  computed:{
    lang() {
     return this.$store.getters.getLang;
    }
  }
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
    .title {
      font-size: 34px;
      line-height: 42px;
      font-weight: bold;
      color: var(--shadow-dark-blue);
      margin-bottom: 4px;
    }
    .subtitle{
      font-size: 28px;
      line-height: 32px;
      font-weight: normal;
      color: var(--dark-blue);
      margin-bottom: 18px;
    }
    .film {
      // width: 25%;
      padding: 0 8px;
      margin-bottom: 16px;
    }
    .con-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      .wrapper {
        background: white;
        border-radius: 15px;
        padding: 6px;
      }
    }
  }
}
</style>
