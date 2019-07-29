<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <GithubSearch
      @searchUser="searchUser"/>    
    <GithubCard 
      :user="user"/>
      <h3>{{ error }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import GithubSearch from "../Github-search/Github-search.vue";
import GithubCard from "../Github-card/Github-card.vue";

export default {
  name: "Github",
  data() {
    return {
      user: {},
      error: "",
      title: "Welcome to github playground api :)"
    };
  },
  methods: {
    searchUser: async function(search) {
      this.cleanErrorMessages();
      axios
        .get("https://api.github.com/users/" + search)
        .then(res => {
          this.user = { ...res.data };
        })
        .catch(() => {
          this.user = {};
          this.error = "User not found";
        });
    },
    cleanErrorMessages: function() {
      this.error = "";
    }
  },
  components: {
    GithubSearch,
    GithubCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.search {
  border-radius: 3px;
}
</style>
