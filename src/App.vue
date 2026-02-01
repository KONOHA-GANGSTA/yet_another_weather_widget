<script setup>
import { computed, ref, watch } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatList from "./components/StatList.vue";
import { api, PATHES } from "./api";
import Skeleton from "./components/Skeleton.vue";
import IconError from "./icons/IconError.vue";
import Week from "./components/Week.vue";
import DayHeader from "./components/DayHeader.vue";

const DEFAULT_CITY = "Москва";
const EMPTY_RESP = { temperature: "-", stats: [], icon: null };
const DAYS_RANGE = 7;

const selectedDay = ref(0);
const city = ref(DEFAULT_CITY);
const isFetching = ref(false);
const isError = ref(false);
const data = ref(null);

watch(
  () => city.value,
  () => {
    selectedDay.value = 0;
    data.value = null;
    isFetching.value = true;
    isError.value = false;
    api
      .get(PATHES.WEATHER, { params: { name: city.value, days: DAYS_RANGE } })
      .then((res) => {
        data.value = res.data;
      })
      .catch(() => {
        isError.value = true;
      })
      .finally(() => {
        isFetching.value = false;
      });
  },
  { immediate: true },
);

const comp = computed(() => {
  if (data.value) {
    const { temperature, humidity, fallout, wind, icon } =
      data.value[selectedDay.value];
    const stats = [
      { label: "Влажность", value: humidity },
      { label: "Осадки", value: fallout },
      { label: "Ветер", value: wind },
    ];
    return { temperature, stats, icon };
  } else return EMPTY_RESP;
});
</script>

<template>
  <div class="container">
    <div v-if="isError" class="error_head">Произошла ошибка. Смените город</div>
    <Skeleton v-if="isFetching" />
    <IconError v-else-if="isError" :size="128" />
    <template v-else>
      <DayHeader :city="city" :day="data[selectedDay]" />
      <StatList :stats="comp.stats" />
      <Week
        :days="data"
        :selected="selectedDay"
        @on-click-day="(e) => (selectedDay = e)"
      />
    </template>
    <CitySelect :initial-value="city" @on-city-select="(e) => (city = e)" />
  </div>
</template>

<style scoped>
.container {
  min-width: 400px;
  padding: 24px;
  background-color: var(--color-bg-card);
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: var(--border-radius);
  align-items: center;
}

.error_head {
  padding: 10px;
  margin-top: -24px;
  margin-bottom: 24px;
  border: 1px solid var(--color-primary);
  border-top: transparent;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  background-color: var(--color-bg-main);
}
</style>
