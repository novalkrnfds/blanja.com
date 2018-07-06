import Loader from 'vue-spinner/src/PulseLoader';
import Films from '../films/index';
import RelatedMovie from '../relatedmovie/index';

export default {
  name: 'people',
  components: { Loader, Films, RelatedMovie },
  computed: {
    dataPeople() {
      return this.$store.state.people.data;
    },
    isLoading() {
      return this.$store.state.films.isLoading;
    },
    showRelated() {
      return this.$store.state.relatedMovie.isLoading;
    },
  },
  methods: {
    findMore() {
      let randomNumber = Math.floor((Math.random() * 88) + 1);
      this.$store.dispatch('fetchPeople', randomNumber);
    },
  },
  filters: {
    capitalize: function(word) {
      return word[0].toUpperCase() + word.slice(1);
    },
  },
}