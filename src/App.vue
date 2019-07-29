<template>
  <div id="app">
    <Github></Github>
  </div>
</template>

<script>
import Github from "./components/Github/Github";

export default {
  name: "App",
  data(){
    return {
      button: false
    }
  },
  components: {
    Github
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
