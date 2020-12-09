const state = () => ({
  progress: 'done'
})

const actions = {
  HANDLE_PROGRESS_STATUS: ({commit}, status) => {
    commit('SET_PROGRESS_STATUS', status)
  }
}

const mutations = {
  SET_PROGRESS_STATUS(state, payload) {
    state.progress = payload
  }
}

export const PROGRESSBAR = {
  loading: dispatch =>
    dispatch('PROGRESSBAR/HANDLE_PROGRESS_STATUS', 'loading', {root: true}),
  done: dispatch =>
    dispatch('PROGRESSBAR/HANDLE_PROGRESS_STATUS', 'done', {root: true})
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
