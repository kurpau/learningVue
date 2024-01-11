import { ref } from 'vue';

export default function useAlert(startVis = false) {
  const alertIsVisible = ref(startVis);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
