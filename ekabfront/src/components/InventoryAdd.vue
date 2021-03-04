<template>
  <h1>Inventory Add Page</h1>
  <select v-model="selectedSweet">
    <option value="sekerbura">Sekebura</option>
    <option value="paxlava">Paxlava</option>
    <option value="qoqal">Qoqal</option>
    <option value="badambura">Badambura</option>
  </select>
  <label for="sweetcount"></label>
  <input type="number" id="sweetcount" v-model="sweetCount">
  <button v-on:click="addSweet()">Add to Inventory</button>
  <hr />
  <select v-model="selectedDrink">
    <option value="cola">Coca-Cola</option>
    <option value="fanta">Fanta</option>
    <option value="sprite">Sprite</option>
    <option value="cappy_orange">Cappy Orange</option>
    <option value="cappy_multi">Cappy MultiFruit</option>
  </select>
  <button>Add to Inventory</button>
</template>

<script>
export default {
  data: function () {
    return {
      selectedSweet: "",
      selectedDrink: "",
      sweetCount: 0,
      drinkCount: 0,
    };
  },
  methods: {
    addSweet() {
      const sweet = {
        name: this.selectedSweet,
        count: this.sweetCount
      }
      this.$store.commit("ADD_SWEET", sweet);
    },
    addDrink() {
    },
  },
};
</script>

<style scoped>
</style>