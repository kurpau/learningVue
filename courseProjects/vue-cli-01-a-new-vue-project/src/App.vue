<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          email: "manuel@localhost.com",
          phone: "01234 5678 991",
        },
        {
          id: "julie",
          name: "Julie Jones",
          email: "julie@localhost.com",
          phone: "09876 543 221",
        },
      ],
    };
  },
};
</script>
