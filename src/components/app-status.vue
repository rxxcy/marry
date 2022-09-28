<template>
  <div class="status">
    <div class="count">
      当前在线：<span class="n">{{ count }}</span> 人
    </div>
    <div class="music"></div>
  </div>
</template>

<script setup>
import { Howl, Howler } from 'howler'
import { computed, onMounted, reactive } from 'vue'
import { useRootStore } from '../store'
const store = useRootStore()

const howl = reactive({
  ins: null,
})

const count = computed(() => store.count)
onMounted(() => {
  // setTimeout(() => {
  // Howler.unload()
  // howl.ins = new Howl({
  //   src: [
  //     'https://cdn.qiniu.rxxcy.com/other/zsjnmdr.mp3',
  //     // 'https://freetyst.nf.migu.cn/public/ringmaker01/n17/2017/07/%E6%97%A0%E6%8D%9F/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/flac/%E8%8A%B1%E6%B5%B7-%E5%91%A8%E6%9D%B0%E4%BC%A6.flac',
  //     // 'https://freetyst.nf.migu.cn/public/ringmaker01/n17/2017/07/%E6%97%A0%E6%8D%9F/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/flac/%E8%8A%B1%E6%B5%B7-%E5%91%A8%E6%9D%B0%E4%BC%A6.flac',
  //   ],
  //   // html5: true,
  //   autoplay: true,
  //   loop: false,
  //   // volume: 1,
  //   onload: () => console.log('onload'),
  //   onloaderror: e => console.log('error', e),
  //   onplay: e => {
  //     // console.log(howl?.seek())
  //     console.log('onplay', e)
  //   },
  // })
  // howl.ins?.play()
  // }, 2000)
})
</script>

<style lang="scss" scoped>
.status {
  .count {
    font-size: 0.7em;
    position: fixed;
    bottom: 0.5em;
    right: 0.5em;
    color: #aeb3b9;
    .n {
      display: inline-block;
      text-align: center;
      width: 2.1em;
      color: #f78da7;
    }
  }
}
</style>
