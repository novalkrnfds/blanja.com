import $store from '@/store';
import Loader from 'vue-spinner/src/RingLoader';
import People from '../people/index';

export default {
  name: 'homePeople',
  components: { Loader, People },
  beforeRouteEnter(to, from, next) {
    next();
    $store.dispatch('fetchPeople', 1);
  },
  data() {
    return {

    };
  },
  computed: {
    isLoading() {
      return this.$store.state.people.isLoading;
    },
  },
  methods: {

  },
};