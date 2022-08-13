import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      counter: 0,
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
  getters: {
    counter(state) {
      //   if (state.counter >= 10) {
      //     return `${state.counter}!`;
      //   }
      return state.counter;
    },
    doubleCounter(_, getters) {
      return getters.counter * 2;
    },
  },
  actions: {
    incAsync(context) {
      setTimeout(() => {
        context.commit("add", 10);
      }, 1000);
    },
  },
});
