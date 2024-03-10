<script setup lang="ts">
import { computed } from 'vue';
import { usePagination, useFetch } from '../hooks'

const props = withDefaults(
  defineProps<{
    page?: number,
    endpoint:string
  }>(),
  {
    page: 1
  }
);


const {
  curpage,
  nextPage,
  prevPage
} = usePagination(props.page);
const endpointFn = computed(() => `${props.endpoint}?page=${curpage.value}`);
const {
  data,
  loading,
  error
} = useFetch(endpointFn);


// console.log('render pagenation component');
function handleNextPage() {
  nextPage()
}

function handlePrevPage() {
  prevPage()
}
</script>

<template>
  <div>
    <button @click="handlePrevPage">Prev</button>
    <text>{{ curpage }}</text>
    <button @click="handleNextPage">Next</button>

    <div v-if="loading">Loading...</div>

    <div v-if="data">
      <!-- display data -->
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>
  </div>
</template>
