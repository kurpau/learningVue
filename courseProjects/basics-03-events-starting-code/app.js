const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Signed Up!");
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
