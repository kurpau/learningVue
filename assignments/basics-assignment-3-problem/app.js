const app = Vue.createApp({
  data() {
    return {
      expected: 37,
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < this.expected) return "Not there yet";
      if (this.number > this.expected) return "Too much!";
      if (this.number === this.expected) return this.expected;
    },
  },
  methods: {
    addNum(num) {
      this.number += num;
      console.log(this.number);
    },
  },
  watch: {
    result() {
      setTimeout(
        function () {
          console.log(this.number);
          this.number = 0;
        }.bind(this),
        5000
      );
    },
  },
}).mount("#assignment");
