const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue.js",
      anotherGoal: "<h2>Big Goal</h2>",
      vueLink: "https://vuejs.org/api/",
    };
  },

  methods: {
    renderGoal() {
      return Math.random() > 0.5 ? "Learn React" : "Learn Vue";
    },
  },
});

app.mount("#user-goal");
