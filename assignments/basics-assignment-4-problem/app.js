const app = Vue.createApp({
  data() {
    return {
      userSetClass: "",
      seen: true,
      userColor: "",
    };
  },
  computed: {
    isSeen() {
      if (this.seen) return "visible";
      else return "hidden";
    },
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
  },
});

app.mount("#assignment");
