const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      }
    },
  },
});

app.mount("#styling");
