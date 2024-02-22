<template>
  <div id="app">
    <ExpandOnTap />
  </div>
</template>

<script>
import ExpandOnTap from "./components/ExpandOnTap.vue";

export default {
  name: "App",
  components: { ExpandOnTap },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bg-aqua {
  background-color: #e2e8f0;
}
</style>
