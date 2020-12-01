import axios from "axios";

const state = () => ({
  contacts: null,
  editingContact: null
});

const getters = {
  GET_CONTACTS: state => {
    return state.contacts;
  },
  GET_EDITING_CONTACT: state => {
    return state.editingContact
  }
};

const actions = {
  LOAD_CONTACTS: ({ commit }, url) => {
    return new Promise(resolve => {
      axios.get(url)
        .then(resp => commit("STORE_CONTACTS", resp.data))
        .then(resolve)
    })
  },

  GET_CONTACT_TO_EDIT: ({commit, state}, index) => {
    commit("SET_CONTACT_TO_EDIT", state.contacts[index])
  }
};

const mutations = {
  STORE_CONTACTS(state, payload) {
    state.contacts = payload;
  },
  SET_CONTACT_TO_EDIT(state, payload) {
    state.editingContact = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
