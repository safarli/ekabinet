<template>
  <h1>Inventory Page</h1>
  <p>Counter: {{ count }}</p>
  <button @click="changeCount()">Change Count</button>
  <router-view></router-view>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  computed: {
    count: function () {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    changeCount() {
      this.$store.dispatch("delayedChangeCount", 14);
    },
  },
};
</script>


<style scoped>
</style>