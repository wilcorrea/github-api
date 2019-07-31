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
import $container from '../../container';
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
    /**
     * @param {string} user
     * @returns {Promise}
     */
    searchUser(user) {
      this.cleanErrorMessages();
      const service = $container.get('github');
      return service(user)
        .then(this.onSuccess)
        .catch(this.onError);
    },
    /**
     * @param {Object} response
     */
    onSuccess(response) {
      this.user = { ...response.data };
    },
    /**
     */
    onError() {
      this.user = {};
      this.error = this.$options.messages.error;
    },
    /**
     */
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
