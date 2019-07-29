<template>
  <div class="github-card"
    v-if="user.login">
    <div class="github-avatar">
      <img 
        v-bind:src="user.avatar_url">
    </div>
    <div class="github-information">
      <span class="name">
        <a :href="user.html_url">
          {{ user.login }}
        </a>
      </span>
      <span class="company">
        {{ user.company }}
      </span>
      <span>
        {{ user.location }}
      </span>
      <hr/>
      <span>
         {{ user.public_repos }}
        <a 
          :href="user.repos_url">Repositories</a>
      </span>
      <span>
        {{ user.followers }}
        <a 
          :href="user.following_url">Followers</a>
      </span>
      <span>
        {{ user.following }}
        <a 
          :href="user.following_url">Following</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GithubCard",
  props: ["user"]
};
</script>
<style scoped>
:root {
  --main-border-color: #036564;
}
.github-card {
  width: 190px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 2px solid #036564;
}
.github-avatar img {
  border-radius: 3px;
  max-width: 200px;
}
.github-information {
  display: flex;
  flex-direction: column;
  padding: 2px;
}

.github-information hr {
  width: 80%;
}

.github-information a {
  color: #036564;
  text-decoration: none;
  font-weight: 600;
}
.github-information a:hover {
  text-decoration: underline;
}

.github-information label {
  margin: 0px 1px;
}
</style>
