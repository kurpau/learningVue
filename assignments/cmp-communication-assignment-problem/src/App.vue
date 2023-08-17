<template>
  <div>
    <h1>Assignment</h1>

    <active-user :username="username" :age="age"></active-user>
    <user-data @update="updateUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "johnsmith",
      age: 23,
    };
  },
  methods: {
    updateUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
