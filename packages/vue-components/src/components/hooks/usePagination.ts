import { ref} from "vue";

export function usePagination(startPage:number) {
  const currentPage = ref(startPage);


  function nextPage() {
    currentPage.value++;
  }

  function prevPage() {
    if (currentPage.value <= 1) {
      return;
    }

    currentPage.value--;
  }

  return {
    curpage: currentPage,
    nextPage,
    prevPage
  };
}


