<template>
  <div>
    <h1>Xos geldiniz</h1>
    <h2>Salam alyekum</h2>
    <h3>{{ salamla }}</h3>
  </div>
</template>


<script>
import hellow from './components/HelloWorld.vue'

export default {
  data: function () {
    return {
      salamla: "Ana sehife",
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: yellow;
  color: blue;
}
</style>