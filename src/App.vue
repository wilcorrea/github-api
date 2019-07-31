<template>
  <div id="app">
    <Github></Github>
  </div>
</template>

<script>
import axios from 'axios';
import $container from './container';
import Github from './components/Github/Github';

export default {
  name: 'App',
  data() {
    return {
      button: false,
    };
  },
  components: {
    Github,
  },
  created() {
    $container.set('github', user => axios.get(`https://api.github.com/users/${user}`));
  },
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
