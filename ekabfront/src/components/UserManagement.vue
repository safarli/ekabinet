<template>
  <div class="maindiv">
    <h1>User Management Page</h1>
    <router-link tag="a" to="/usermgmt/useradd">USER ADD PAGE</router-link>
    <router-link tag="a" to="/usermgmt/userview">USER VIEW PAGE</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.maindiv {
  width: 600px;
  height: 360px;
  background-color: #afa;
}
</style>