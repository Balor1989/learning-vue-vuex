<template>
  <header class="navbar">
    Счетчик {{ counter }}
    <button class="btn primary" @click="add">Добавить 5</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    add() {
      this.$store.commit("add", 5);
    },
  },
};
</script>
