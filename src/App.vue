<template>
  <TheNavbar />
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn" @click="add">Добавить</button>
      <button class="btn danger" @click="incAsync">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(["counter", "doubleCounter"]),
  },
  methods: {
    ...mapMutations({ add: "increment" }),
    ...mapActions(["incAsync"]),
  },
};
</script>
