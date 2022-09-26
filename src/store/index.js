import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

export const userRootStore = defineStore('root', {
  state() {
    return {}
  },
  actions: {},
})
