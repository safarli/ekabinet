<template>
  <h1>Inventor View Page</h1>
  <button v-on:click="getSweets()">Get Sweets</button>
  <button v-on:click="getDrinks()">Get Drinks</button>
  <table>
    <tr>
      <th>ID</th>
      <th>Mehsul</th>
      <th>Sayi</th>
    </tr>
    <tr v-for="i in items" :key="items.indexOf(i)">
      <td>{{ items.indexOf(i) }}</td>
      <td>{{ i.name }}</td>
      <td>{{ i.count }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data: function () {
    return {
      items: [],
    };
  },
  methods: {
    getSweets() {
      this.items = this.$store.getters.getSweets;
    },
    getDrinks() {
      this.items = this.$store.getters.getDrinks;
    },
  },
  computed: {},
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid green;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
}
</style>