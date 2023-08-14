const app = Vue.createApp({
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
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : "Show" }} details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        email: "manuel@localhost.com",
        phone: "01234 5678 991",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
