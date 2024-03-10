import { isRef,ref,onMounted,watch,ComputedRef } from 'vue';

interface IHeaderConfig {

  Accept?: string;
  'Content-Type': string;
  [propName: string]: any;
}
export enum EHttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}
export interface IRequestOptions {
  headers?: IHeaderConfig;
  signal?: AbortSignal;
  method?: EHttpMethods;
  body?: string;
  timeout?: number;
  credentials?: 'include' | 'same-origin';
  mode?: 'cors' | 'same-origin';
  cache?: 'no-cache' | 'default' | 'force-cache';
}

export function useFetch(endpoint: ComputedRef<string> | string) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);
  function fetchData() {
    loading.value = true;
    const header:IRequestOptions = {
      method:EHttpMethods.GET,
      headers: {
        "Content-Type": "application/json",

    },
    timeout: 10000,
    mode: 'cors',
    cache: 'no-cache'
  }
    // 也可以使用 axios
    return fetch(isRef(endpoint) ? endpoint.value : endpoint, {
      ...header
    })
      .then(res => {
        // 非 200 响应码
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then(json => {
        data.value = json;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  onMounted(() => {
    fetchData();
  });

  if (isRef(endpoint)) {
    watch(endpoint, () => {
      // 重新请求数据
      fetchData();
    });
  }
  return {
    data,
    loading,
    error
  };
}
