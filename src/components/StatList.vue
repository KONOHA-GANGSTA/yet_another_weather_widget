<script setup>
import StatItem from "./StatItem.vue";
defineProps({ stats: Array });
</script>

<template>
  <div class="stats">
    <StatItem
      v-for="{ label, value } in stats"
      :key="label"
      :label="label"
      :value="value"
    />
  </div>
</template>

<style scoped>
.stats {
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
