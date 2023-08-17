<template>
  <div id="user">
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["username", "age"],
};
</script>

<style scoped>
#user {
  flex-direction: row;
}

h2 {
  margin-right: 1rem;
}
</style>
