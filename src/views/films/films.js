import ModalFilm from './modal/index';

export default {
  name: 'films',
  components: { ModalFilm },
  data() {
    return {
      showModal: false,
      item: {}
    };
  },
  computed: {
    dataFilms() {
      return this.$store.state.films.data;
    },
    nameOfMovie() {
      const name = this.$store.state.people.data.name;
      return name.split(' ').slice(-1).join(' ');
    },
  },
  methods: {
    getFilmMore() {
      this.$store.dispatch('fetchFilms');
    },
    detailFilms(item) {
      this.$store.commit('updateDetailFilm', item);
      this.showModal = !this.showModal;
    },
    onDetailModalClose(){
      this.showModal = !this.showModal;
    },
  },
}