const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    invokeAlert() {
      alert("Be alerted now!");
    },
  },
}).mount("#assignment");
