<template>
  <div>
    <h1>Salam aleykum</h1>
    <router-link to="/">Home Page</router-link>
    <router-link to="/inventory/view">Inventory View</router-link>
    <router-link to="/inventory/add">Inventory Add</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
a {
    border: 2px solid #333;
    padding: 5px 10px;
    margin: 2px;
    text-decoration: none;
}
a:link, a:visited{}
a:hover, a:active{
    background-color: #ccc;
}
</style>