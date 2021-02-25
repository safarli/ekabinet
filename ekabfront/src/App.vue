<template>
    <div>
        <h1>Salam aleykum</h1>
        <router-link to="/">Home Page</router-link>
        <router-link to="/additems">Add Page</router-link>
        <router-link to="/viewitems">View Page</router-link>
        <router-view></router-view>
        </div>    
</template>

<script>
import axios from 'axios'

axios.get("http://localhost:3333/users")
.then(response => {
    console.log(response)
})


export default {
    
}
</script>

<style scoped>

</style>