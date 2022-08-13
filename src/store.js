import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    add(state, payload) {
      state.counter += payload;
    },
  },
});
