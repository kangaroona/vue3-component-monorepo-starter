<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'World'
  }
);
const count = ref(0);
function clickHandler() {
  count.value += 2;
}
</script>

<template>
  <h1>{{ props.text }}</h1>
  <text class="count-text">{{ count }}</text>
  <button class="openx-button" @click="clickHandler">
    <slot />
  </button>
</template>
