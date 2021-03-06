<template>
  <h1>App Main Navigation Menu</h1>
  <router-link tag="a" to="/">HOME PAGE</router-link>
  <router-link tag="a" to="/usermgmt">USER MANAGEMENT PAGE</router-link>
  <router-view></router-view>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>


<style>
a {
  font-weight: 600;
  text-decoration: none;
  margin: 4px;
  border: 2px solid #f0f;
  padding: 6px;
}
a:hover {
  background-color: #ccc;
}
</style>
