<script setup lang="ts">
import { reactive, ref } from 'vue';

interface Book {
  count: number;
  data: {
    title: string;
    author?: string;
    year?: number;
  };
}

const props = withDefaults(defineProps<Book>(), {
  count: 0,
  data: () => ({
    title: 'hello',
    author: 'monster',
    year: 2020
  })
});

const res = reactive(props);
const newCount = ref(props.count);
function increment() {
  newCount.value += 1;
  res.data.author = 'monster3';
}
</script>

<template>
  <div>{{ res.data.title }}-{{ res.data?.author }}--{{ newCount }}</div>
  <button @click="increment">click</button>
</template>
