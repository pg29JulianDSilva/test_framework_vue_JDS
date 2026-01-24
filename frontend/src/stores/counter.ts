import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//Here is where the bases of pinia works independenly and creates computes variables, which can create calculated variables and
//save it till is needed or reused again

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
