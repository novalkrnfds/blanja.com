export default {
  name: 'modal-film',
  data(){
    return {
      isChangePassword: false,
      oldPass: '',
      newPass: '',
      confirmPass: '',
    }
  },
  computed:{
    film() {
      return this.$store.state.detailFilm.data;
    },
  },
  methods: {
    closeModal(){
      this.$props.close();
    },
  },
  props: {
    close: {
      type: Function,
    },
  },
}