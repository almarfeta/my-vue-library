const userModule = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOG_OUT(state) {
      state.user = null;
    },
  },
  actions: {
    logIn({ commit }, user) {
      commit("SET_USER", user);
    },
    logOut({ commit }) {
      commit("LOG_OUT");
    },
  },
};

export default userModule;
