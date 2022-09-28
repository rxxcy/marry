import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

export const useRootStore = defineStore('root', {
  state() {
    return {
      count: 0,
      music: false,
      danmu: false,
      danmus: [],
    }
  },
  actions: {
    showDanmu() {
      this.danmu = true
    },
    hideDanmu() {
      this.danmu = false
    },
    setCount(count) {
      this.count = count
    },
    pushDanmus(danmus) {
      this.danmus = danmus
      this.danmu = true
    },
  },
})
