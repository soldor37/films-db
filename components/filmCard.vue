<template>
  <div class="container">
    <vs-card>
      <template #title>
        <h3>{{ filmInfo.title }}</h3>
      </template>
      <template #img v-if="filmDetails">
        <img :src="`https://image.tmdb.org/t/p/w500${filmDetails.backdrop_path}`" alt="" />
      </template>
      <template #text v-if="filmDetails">
        <p>
          {{ filmDetails.release_date | convertDate
          }}{{
            filmDetails.production_countries.length > 0
              ? ", " + filmDetails.production_countries[0].name
              : null
          }}{{
            filmDetails.genres.length > 0
              ? ", " + filmDetails.genres[0].name
              : null
          }}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class="bx bx-heart"></i>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: ["filmInfo"],
  data() {
    return {
      filmDetails: null,
      filmImage: null
    };
  },
  created() {
    this.getFilmDetails();
  },
  methods: {
    async getFilmDetails() {
      const filmDetails = await this.$axios.$get(
        `/movie/${this.filmInfo.id}?api_key=${this.$store.state.apiKey}&language=en-US`
      );
      this.filmDetails = filmDetails;
    },
  },
  filters: {
    convertDate(date) {
      let dateParts = date.split("-");
    //   return [dateParts[2],dateParts[1],dateParts[0]].join('.');
    return dateParts[0]
    },
  },
};
</script>