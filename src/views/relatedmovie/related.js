export default {
  name: 'related-movie',
  computed: {
    related() {
      return this.$store.state.relatedMovie.data;
    },
  },
}