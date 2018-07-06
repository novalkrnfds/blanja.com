import Vue from 'vue';
import Vuex from 'vuex';

import fetchJSON from './helpers/fetchJSON';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: {},
    films: {},
    detailFilm: {},
  },
  mutations: {
    updateDataPeople(state, _data) {
      state.people = {
        data: _data,
        isLoading: false,
      };
    },
    updateDataFilms(state, _data) {
      state.films = {
        data: _data,
        isLoading: false,
      };
    },
    updateRelatedMovie(state, _data) {
      state.relatedMovie = {
        data: _data,
        isLoading: false,
      };
    },
    updateDetailFilm(state, _data) {
      state.detailFilm = {
        data: _data,
      };
    },
    setLoading(state, { isLoading, key, error }) {
      state[key] = {
        ...state[key],
        isLoading,
        error,
      };
    },
  },
  actions: {
    async fetchPeople({ commit }, param) {
      commit('setLoading', { isLoading: true, key: 'people' });
      try {
        const anotherMovie = await fetchJSON(`/films/${7}`);
        commit('updateRelatedMovie', anotherMovie);

        const data = await fetchJSON(`/people/${param}`);
        commit('updateDataPeople', data);

        const films = [];
        commit('setLoading', { isLoading: true, key: 'films' });
        data.films.map(async (item, i) => {
          if (i < 4) {
            const dataFilms = await fetchJSON(`/films/${item[27]}`);
            films.push(dataFilms);
          }
          if ((data.films.length - 1) === i) commit('updateDataFilms', films);
        });

        return data;
      } catch (error) {
        return error;
      }
    },
    async fetchFilms({ commit }) {
      commit('setLoading', { isLoading: true, key: 'films' });
      try {
        const data = await fetchJSON('/films/');
        commit('updateDataFilms', data.results);

        return data;
      } catch (error) {
        return error;
      }
    },
  },
});
