<script setup>
defineProps({ label: String, value: String });
</script>

<template>
  <div class="list_container">
    <div>{{ label }}</div>
    <div>{{ value || "-" }}</div>
  </div>
</template>

<style scoped>
.list_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
