export default {
  state: {
    email: "",
    passwordToken: "",
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
      return;
    },
    setPasswordToken(state, passwordToken) {
      state.passwordToken = passwordToken;
      return;
    }
  },
  actions: {
    submitEmail({ commit }, email) {
      return commit("setEmail", email);
    },
    submitPasswordToken({ commit }, passwordToken) {
      return commit("setPasswordToken", passwordToken)
    }
  },
};
