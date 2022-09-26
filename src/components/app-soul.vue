<template>
  <div class="soul">
    <div class="icon">
      <img :src="icon" />
    </div>
    <div class="title">『 {{ title }} 』</div>

    <div class="photos">
      <div v-for="(i, x) in photos" :key="x" :class="[x == active ? 'active' : 'item']">
        <van-image lazy-load :src="i" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'https://qiniu.fdc.xp.yn.cn/uploads/20220926/044831b5d5a77f6eccb4e5b37164acc9.png',
  },
  title: {
    type: String,
    default: '平行',
  },
  photos: {
    type: Array,
    default: () => [
      'https://qiniu.fdc.xp.yn.cn/uploads/20220926/7df39560c1ba95f9723a35d3cad6deb5.png',
      'https://qiniu.fdc.xp.yn.cn/uploads/20220926/7df39560c1ba95f9723a35d3cad6deb5.png',
      'https://qiniu.fdc.xp.yn.cn/uploads/20220926/7df39560c1ba95f9723a35d3cad6deb5.png',
    ],
  },
})

const active = ref(1)
</script>

<style lang="scss" scoped>
.soul {
  margin: 50px 0;
  text-align: center;
  .icon {
    img {
      width: 50px;
    }
  }
  .title {
    font-size: 1.1em;
  }
  .photos {
    display: flex;
    margin: 36px 0;
    max-height: 210px;
    align-items: center;
    .item {
      width: 28%;
      margin-top: 1em;
    }
    .active {
      width: 42%;
      border: 1px solid var(--skk-red);
    }
  }
}
</style>
