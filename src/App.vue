<template>
  <TheNavbar />
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>
        Счетчик {{ $store.getters.counter }} ({{
          $store.getters.doubleCounter
        }})
      </h2>
      <button class="btn" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    doubleCounter() {
      this.$store.commit("doubleCounter");
    },
    incrementAsync() {
      this.$store.dispatch("incAsync");
    },
  },
};
</script>
