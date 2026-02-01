<script setup>
import IconClody from "../icons/IconClody.vue";
import IconRainy from "../icons/IconRainy.vue";
import IconSunny from "../icons/IconSunny.vue";

defineProps({ icon: String, size: Number, color: String });
</script>

<template>
  <IconSunny v-if="icon === 'sunny'" :size="size" :color="color" />
  <IconRainy v-else-if="icon === 'rainy'" :size="size" :color="color" />
  <IconClody v-else-if="icon === 'cloudy'" :size="size" :color="color" />
</template>
