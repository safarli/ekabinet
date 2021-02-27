<template>
  <h1>Query items from inventory</h1>
  <button v-on:click="getData()">Get Data</button>
  <table>
    <tr>
      <th>User ID</th>
      <th>User Name</th>
      <th>User Email</th>
    </tr>
    <tr v-for="user in responseData.data" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
        responseData: ""
    };
  },
  methods: {
    getData() {
      axios.get("http://localhost:3333/users").then((response) => {
        console.log(response);
        this.responseData = response;
      });
    },
  },
};
</script>

<style scoped>
table {
       border-collapse: collapse; 
       border: 1px solid black;
    }
    tr, td , th{
        border: 1px solid black
    }
</style>