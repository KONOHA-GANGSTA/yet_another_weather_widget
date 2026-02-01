<script setup>
import WeatherIcon from "./WeatherIcon.vue";

defineProps({ days: Array, selected: Number });
const emit = defineEmits(["onClickDay"]);
</script>

<template>
  <div class="week">
    <div
      v-for="(day, index) in days"
      :key="day.dayOfWeek"
      :class="`day ${selected === index ? 'selected' : ''}`"
      @click="() => emit('onClickDay', index)"
    >
      <div class="day_header">
        <span>{{ day.temperature }}</span>
        <WeatherIcon
          :icon="day.icon"
          :color="`${selected === index ? '#000000' : '#FFFFFF'}`"
        />
      </div>
      <span>{{ day.dayOfWeek }}</span>
    </div>
  </div>
</template>

<style scoped>
.week {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
}

.day {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  min-width: 110px;
  border-radius: var(--border-radius);
  background-color: var(--color-bg);
  cursor: pointer;
  transition: 0.25s;
}

.selected,
.day:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-inverted);
}

.day_header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
