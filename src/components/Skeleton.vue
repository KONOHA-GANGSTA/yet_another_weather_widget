<script setup></script>

<template>
  <div class="skeleton">
    <div class="wave" />
  </div>
</template>

<style scoped>
.skeleton {
  width: 100%;
  height: 200px;
  background-color: var(--color-bg-main);
  overflow: hidden;
  border-radius: var(--border-radius);
}

@keyframes left2right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.skeleton .wave {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color-bg), transparent);
  animation: left2right 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
