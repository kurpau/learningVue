const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      shown: true,
    };
  },
  computed: {
    btnLabel() {
      return this.shown ? "Hide" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
  },
});

app.mount("#assignment");
