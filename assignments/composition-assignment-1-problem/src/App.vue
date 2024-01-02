<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="goal.visible">{{ goal.text }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { reactive } from 'vue';

// const goalVisible = ref(true);
// const courseGoal = 'Learn Vue';

const goal = reactive({
  text: 'Learn that thing',
  visible: true,
});

/* function toggleGoal() {
  goalVisible.value = !goalVisible.value;
} */

/* function toggleGoal() {
  goal.value.visible = !goal.value.visible;
} */

function toggleGoal() {
  goal.visible = !goal.visible;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>

