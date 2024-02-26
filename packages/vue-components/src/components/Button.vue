<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'World'
  }
);

function clickHandler() {
  console.log(props.text);
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot />
  </button>
</template>
