<template>
  <h2>Countdown</h2>
  <label> Time left: <progress :value="progressRate"></progress> </label>

  <div>{{ (left / 1000).toFixed(1) }}s</div>

  <div>
    Duration: <input type="range" v-model="duration" min="1000" max="30000" />
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <div>
    <button v-if="left <= 0" @click="reset">Reset</button>
    <button v-else @click="toggleTimer">
      {{ timerRunning ? "Stop" : "Start" }}
    </button>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed, watch } from "vue";

const timerRunning = ref(false);
const duration = ref(15 * 1000);
const left = ref(duration.value);

let startDate, handle;

watch(duration, (val) => {
  cancelAnimationFrame(handle);
  timerRunning.value = false;
  left.value = val;
});

function toggleTimer() {
  if (!timerRunning.value) {
    timerRunning.value = true;
    startDate = new Date().setMilliseconds(duration.value) - (duration.value - left.value);
    update();
  } else {
    timerRunning.value = false;
    cancelAnimationFrame(handle);
  }
}

const update = () => {
  left.value = Math.max(0, startDate - new Date());
  if (left.value <= 0) {
    cancelAnimationFrame(handle);
  } else {
    handle = requestAnimationFrame(update);
  }
};

const reset = () => {
  left.value = duration.value;
  startDate = new Date().setMilliseconds(duration.value);
  update();
};

const progressRate = computed(() => Math.min(left.value / duration.value, 1));

onUnmounted(() => {
  cancelAnimationFrame(handle);
});
</script>
