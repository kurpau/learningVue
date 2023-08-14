const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
