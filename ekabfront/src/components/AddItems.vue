<template>
  <h1>Add items to inventory</h1>
  <div>
    <label for="nameofuser">Enter your name:</label>
    <input type="text" id="nameofuser" v-model="nameofuser" />
  </div>
  <div>
    <label for="emailofuser">Enter your email:</label>
    <input type="text" id="emailofuser" v-model="emailofuser" />
  </div>
  <button v-on:click="sendData()">Submit</button>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      nameofuser: "",
      emailofuser: "",
    };
  },
  methods: {
    sendData() {
      axios
        .post(
          "http://localhost:3333/users",
          `name=${this.nameofuser}&email=${this.emailofuser}`
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
</style>