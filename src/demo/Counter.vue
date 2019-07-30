<template>
  <div>
    <span class="counter">{{ counter }}</span>
    <button @click="increment">Click to Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter = this.counter + 1;
    },
  },
};
</script>

<style scoped>

</style>
