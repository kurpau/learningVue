<template>
  <div>
    <form @submit.prevent="submitUser">
      <label for="name">Name: </label>
      <input type="text" name="name" v-model="getName" />
      <label for="age">Age: </label>
      <input type="number" name="age" v-model="getAge" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["update"],
  data() {
    return {
      getName: "",
      getAge: "",
    };
  },
  methods: {
    submitUser() {
      this.$emit("update", this.getName, this.getAge);
    },
  },
};
</script>
