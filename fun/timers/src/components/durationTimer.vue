<template>
  <h2>Stopwatch</h2>
  <div>
    <label for="elapsedProgress">Time elapsed: </label>
    <progress id="elapsedProgress" :value="progress"></progress>
  </div>
  {{ elapsedTime }}
  <div>
    <label for="timerRange">Duration: </label>
    <input id="timerRange" type="range" min="1000" max="10000" v-model="duration" />
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <div>
    <button v-if="elapsed >= duration" @click="reset">Reset</button>
    <button v-else @click="toggleTimer">
      {{ timerRunning ? "Stop" : "Start" }}
    </button>
  </div>
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
    timerRunning.value = true;
    lastTime = performance.now() - elapsed.value;
    update();
  } else {
    timerRunning.value = false;
    cancelAnimationFrame(handle);
  }
}

function update() {
  elapsed.value = performance.now() - lastTime;
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle);
  } else {
    handle = requestAnimationFrame(update);
  }
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
