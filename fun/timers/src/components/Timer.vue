<template>
  <label for="elapsedProgress">Time elapsed: {{ elapsedTime }}</label>
  <progress id="elapsedProgress" :value="progress"></progress>
  <button @click="reset">Reset</button>
  <button @click="toggleTimer">
    {{ timerRunning ? "Stop" : "Start" }}
  </button>
  <br />
  <h3>Pick timer duration:</h3>
  <label for="timerRange">Value between 0 and 30</label>
  <input id="timerRange" type="range" min="1" max="10000" v-model="duration" />
  {{ (duration / 1000).toFixed(1) }}s
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

let timerRunning = ref(false);
const elapsed = ref(0);
const duration = ref(5 * 1000);
let lastTime;
let handle;

const progress = computed(() => {
  return Math.min(elapsed.value / duration.value, 1);
});

function toggleTimer() {
  if (!timerRunning.value) {
    console.log(timerRunning.value);
    timerRunning.value = true;
    console.log(timerRunning.value);
  }
  if (timerRunning.value) {
    timerRunning.value = false;
    cancelAnimationFrame(handle);
  }
}

function update() {
  elapsed.value = performance.now() - lastTime;
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle);
  }
  handle = requestAnimationFrame(update);
}

const elapsedTime = computed(() => {
  return (elapsed.value / 1000).toFixed(1) + "s";
});

function reset() {
  elapsed.value = 0;
  timerRunning.value = true;
  lastTime = performance.now();
  update();
}

onUnmounted(() => cancelAnimationFrame(handle));
</script>
