<template>
  <h1>Vue.JS Main App View</h1>
  <h2>Navigate between page with vue-router</h2>
  <p>Counter: {{ getCount }}</p>
  <button @click="increment">Add+</button>
  <router-link to="/">Home</router-link>
  <router-link to="/additems">Add Items</router-link>
  <router-link to="/viewitems">View Items</router-link>
  <router-view></router-view>
</template>


<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    increment: function () {
      this.$store.commit("increment");
    },
  },
  computed: {
    getCount: function () {
      return this.$store.getters.getCount;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: yellow;
  color: blue;
}
</style>