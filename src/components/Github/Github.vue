<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <GithubSearch
      @searchUser="searchUser"
    />
    <GithubCard
      :user="user"
    />
    <h3>{{ error }}</h3>
  </div>
</template>

<script>
import axios from 'axios';
import GithubSearch from '../Github-search/Github-search';
import GithubCard from '../Github-card/Github-card';

export default {
  name: 'Github',
  messages: {
    error: 'User not found',
  },
  data() {
    return {
      user: {},
      error: '',
      title: 'Welcome to github playground api :)',
    };
  },
  methods: {
    searchUser(search) {
      this.cleanErrorMessages();
      return axios
        .get(`https://api.github.com/users/${search}`)
        .then(this.onSuccess)
        .catch(this.onError);
    },
    onSuccess(response) {
      this.user = { ...response.data };
    },
    onError() {
      this.user = {};
      this.error = this.$options.messages.error;
    },
    cleanErrorMessages() {
      this.error = '';
    },
  },
  components: {
    GithubSearch,
    GithubCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.search {
  border-radius: 3px;
}
</style>
