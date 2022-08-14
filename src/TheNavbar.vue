<template>
  <header class="navbar">
    Счетчик {{ counter }}
    <button class="btn primary" @click="addFive">Добавить 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter;
    // },
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapMutations(["add"]),
    addFive() {
      this.add(5);
      // this.$store.commit("add", 5);
    },
  },
};
</script>
