<template>
  <vs-card class="container">
    <template #title>
      <h3 style="color: #12232e">{{ filmInfo.title }}</h3>
    </template>
    <template #img v-if="filmDetails">
      <img
        :src="`https://image.tmdb.org/t/p/w500${filmDetails.backdrop_path}`"
        alt=""
      />
    </template>
    <template #text v-if="filmDetails">
      <p style="color: #203647">
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
</template>

<script>
export default {
  props: ["filmInfo"],
  data() {
    return {
      filmDetails: null,
      filmImage: null,
    };
  },
  created() {
    this.getFilmDetails();
  },
  methods: {
    async getFilmDetails() {
      // const loading = this.$vs.loading({
      //   type: 'square',
      //   color: "#007cc7",
      // });
      const filmDetails = await this.$axios.$get(
        `/movie/${this.filmInfo.id}?api_key=${this.$store.getters.getApiKey}&language=${this.$store.getters.getLang}`
      );
      this.filmDetails = filmDetails;
      // loading.close();
    },
  },
  filters: {
    convertDate(date) {
      let dateParts = date.split("-");
      //   return [dateParts[2],dateParts[1],dateParts[0]].join('.');
      return dateParts[0];
    },
  },
};
</script>