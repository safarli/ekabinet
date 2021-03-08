<template>
  <div class="maindiv">
    <h1>User View Page</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
    <hr />
    <button v-on:click="requestData()">Get Data</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: "",
    };
  },
  methods: {
    requestData() {
      localStorage.setItem("user", "");
      axios
        .get(`http://api.wavevo.com/users/${localStorage.getItem("user")}`)
        .then((response) => (this.users = response.data));
    },
  },
  mounted: function () {
    const mypc = {};

    mypc["cpu"] = "core i7 7700hq";
    mypc["nic"] = "Realtek 1000TBASE Gigabit Ethernet";
    mypc["ram"] = "DDR4 16gb";
    mypc["gpu"] = "Nvidia GeForce GTX 1060Ti";

    for (const prop in mypc) {
      console.log(prop)
    }

    const entries = Object.entries(mypc);

    console.log(entries);
    console.log(mypc);
  },
};
</script>

<style scoped>
.maindiv {
  width: 300px;
  /* height: 180px; */
  background-color: #fcd;
}

table,
th,
td {
  border: 1px solid #000;
  border-collapse: collapse;
}
th,
td {
  padding: 4px 10px;
}
</style>