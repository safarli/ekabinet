<template>
  <div class="maindiv">
    <h1>User Add Page</h1>
    <div>
      <label for="user_name">User Name:</label>
      <input type="text" id="user_name" v-model="user_name" />
    </div>
    <div>
      <label for="user_email">User Email:</label>
      <input type="text" id="user_email" v-model="user_email" />
    </div>
    <button @click="sendData()">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user_name: "",
      user_email: "",
    };
  },
  methods: {
    sendData() {
      const user = `name=${this.user_name}&email=${this.user_email}`;
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      axios
        .post("http://api.wavevo.com/users", user, { headers: headers })
        .then((response) => {
          console.log(response.status);
        });
    },
  },
};
</script>

<style scoped>
.maindiv {
  background-color: #acf;
  width: 300px;
  height: 180px;
}
</style>