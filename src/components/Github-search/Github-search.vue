<template>
  <div class="github-search">
    <input type="text" class="search" placeholder="Your github username"
      v-on:keyup.enter="$emit('searchUser', search)"
      v-model="search">
    <button
      @click="$emit('searchUser', search)">
      Send
    </button>
  </div>
</template>
<script>
export default {
  name: 'GithubSearch',
  data() {
    return {
      search: '',
    };
  },
};
</script>
<style scoped>
.github-search {
  margin: 20px;
}
</style>
