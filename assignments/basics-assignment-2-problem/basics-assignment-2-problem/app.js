const app = Vue.createApp({
  data() {
    return {
      name: "",
      name2: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    setName2(e) {
      this.name2 = e.target.value;
    },
    confirmName() {
      this.confirmedName = this.name2;
    },
    invokeAlert() {
      alert("Be alerted now!");
    },
  },
}).mount("#assignment");
