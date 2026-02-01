<script setup>
import IconLocation from "../icons/IconLocation.vue";
defineProps({ variant: String });
</script>

<template>
  <button class="btn">
    <div class="item_container">
      <div v-if="variant === 'location'">
        <IconLocation />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </button>
</template>

<style scoped>
.item_container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.btn {
  font-size: 24px;
  background: var(--gradient);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 8px;
}
.btn:hover {
  background: var(--inverted-gradiernt);
  color: var(--primary);
}
</style>
