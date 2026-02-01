<script setup>
import { ref, watch } from "vue";
import CommonButton from "./CommonButton.vue";

const props = defineProps({ initialValue: String });
const model = defineModel(String);
const emit = defineEmits(["onCitySelect"]);

const isEdit = ref(false);

const toggle = () => {
  isEdit.value = !isEdit.value;
};

const onSave = () => {
  emit("onCitySelect", model.value);
  toggle();
};

watch(
  () => props.initialValue,
  () => {
    model.value = props.initialValue;
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="isEdit" class="cityselect_container">
    <input v-model="model" type="text" />
    <CommonButton @click="onSave">Сохранить</CommonButton>
  </div>
  <div v-else class="cityselect_container">
    <CommonButton variant="location" @click="toggle"
      >Сменить город</CommonButton
    >
  </div>
</template>

<style scoped>
.cityselect_container {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
