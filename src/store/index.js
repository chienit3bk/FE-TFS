import Vue from "vue";
import Vuex from "vuex";

import product from "./product";
import account from "./account";

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      product,
      account,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });
  return Store;
}
