import axios from 'axios'
import {PROGRESSBAR} from '@/store/modules/progressbar'

const state = () => ({
  contacts: null,
  editingContact: null,
})

const api = 'https://5fc7a3fcf3c77600165d89cf.mockapi.io/api/Contact'

const getters = {
  GET_CONTACTS: (state) => {
    return state.contacts
  },
  GET_EDITING_CONTACT: (state) => {
    return state.editingContact
  },
}

const actions = {
  LOAD_CONTACTS: ({commit, dispatch}) => {
    return new Promise((resolve) => {
      PROGRESSBAR.loading(dispatch)
      axios
        .get(api)
        .then((resp) => commit('STORE_CONTACTS', resp.data))
        .then(() => PROGRESSBAR.done(dispatch))
        .then(resolve)
    })
  },

  GET_CONTACT_TO_EDIT: ({commit, dispatch}, id) => {
    return new Promise((resolve) => {
      PROGRESSBAR.loading(dispatch)
      axios
        .get(`${api}/${id}`)
        .then((resp) => commit('SET_CONTACT_TO_EDIT', resp.data))
        .then(() => PROGRESSBAR.done(dispatch))
        .then(resolve)
    })
  },
}

const mutations = {
  STORE_CONTACTS(state, payload) {
    state.contacts = payload
  },
  SET_CONTACT_TO_EDIT(state, payload) {
    state.editingContact = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
