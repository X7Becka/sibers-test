import axios from 'axios'
import {PROGRESSBAR} from '@/store/modules/progressbar'

const state = () => ({
  scores: []
})

const api = 'https://5fc7a3fcf3c77600165d89cf.mockapi.io/api/scoreboard'

const getters = {
  GET_SCORES: state => {
    return state.scores
  }
}

const actions = {
  SUBMIT_SCORES: ({commit, dispatch}, payload) => {
    return new Promise(resolve => {
      PROGRESSBAR.loading(dispatch)
      axios
        .post(api, payload)
        .then(resp => commit('STORE_SCORES', resp.data))
        .then(() => PROGRESSBAR.done(dispatch))
        .then(resolve)
    })
  },
  FETCH_SCORES: ({commit, dispatch}) => {
    return new Promise(resolve => {
      PROGRESSBAR.loading(dispatch)
      axios
        .get(api)
        .then(resp => commit('STORE_SCORES', resp.data))
        .then(() => PROGRESSBAR.done(dispatch))
        .then(resolve)
        .catch(() => console.log('Something went wrong.'))
    })
  }
}

const mutations = {
  STORE_SCORES(state, payload) {
    state.scores = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
