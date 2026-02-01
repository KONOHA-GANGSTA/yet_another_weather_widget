<script setup>
import WeatherIcon from "./WeatherIcon.vue";

const WEATHER_COLOR_MAP = {
  sunny: "goldenrod",
  cloudy: "#99aeae",
  rainy: "#c1d1e2",
};
defineProps({ city: String, day: Object });
</script>

<template>
  <div
    class="selectet_day_header"
    :style="{ '--weather-color': WEATHER_COLOR_MAP[day.icon] }"
  >
    <WeatherIcon :icon="day.icon" :size="128" />
    <div class="main_caption">
      <div>{{ city }}</div>
      <div>{{ day.temperature }}</div>
    </div>
  </div>
</template>

<style scoped>
.selectet_day_header {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 12px;
  background: linear-gradient(
    90deg,
    var(--color-bg-main),
    var(--weather-color)
  );
  box-shadow: 0 0 12px 0px var(--weather-color);
  border-radius: var(--border-radius);
  transition: 1s;
}

.main_caption {
  text-align: left;
  font-size: 45px;
}
</style>
