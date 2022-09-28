<template>
  <div class="danmu">
    <vue-danmaku
      class="skk-dm"
      ref="danmakuRef"
      v-model:danmus="danmus"
      :autoplay="true"
      :channels="7"
      :speeds="100"
      :use-slot="true"
      :random-channel="true"
      :right="20"
    >
      <template v-slot:dm="{ danmu, index }">
        <div class="danmu-item" :class="randColor()">
          <span>{{ danmu }}</span>
        </div>
      </template>
    </vue-danmaku>
  </div>
  <div class="emit slideLeftReturn">
    <input
      class="input"
      maxlength="50"
      v-model="value"
      type="text"
      @keyup.enter="handerSend"
      placeholder="留下祝福,回车发射 🚀"
    />
  </div>
</template>

<script setup>
import vueDanmaku from 'vue3-danmaku'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRootStore } from '../store'
import { Toast } from 'vant'
import { wss } from '../config'

const store = useRootStore()
const danmu = computed(() => store.danmu)
const danmus = computed(() => store.danmus)
const danmakuRef = ref(null)
const value = ref('')

// const value
const ws = reactive({ ws: null })

// channels: 5, // 轨道数量，为0则弹幕轨道数会撑满容器
// useSlot: true, // 是否开启slot
// loop: true, // 是否开启弹幕循环
// speeds: 200, // 弹幕速度，实际为每秒弹幕走过的像素距离
// fontSize: 20, // 文本模式下的字号
// top: 10, // 弹幕轨道间的垂直间距
// right: 0, // 同一轨道弹幕的水平间距
// debounce: 100, // 弹幕刷新频率（多少毫秒插入一条弹幕，建议不小于50）
// randomChannel: true,

onMounted(() => {
  ws.ws = new WebSocket(wss)
  ws.ws.onopen = () => {
    // ws.send(new Date().getTime())
  }
  ws.ws.onmessage = ({ data }) => handlerOnMessage(data)
})

const handlerOnMessage = e => {
  let payload
  try {
    payload = JSON.parse(e)
  } catch (e) {
    console.log('格式化错误 -> ', e)
  }
  const map = {
    count: count => store.setCount(count),
    message: m => danmakuRef.value.push(m),
    messages: dms => {
      store.pushDanmus(dms)
      // danmakuRef.value.play()
    },
  }
  const { cmd, data } = payload
  map[cmd] && map[cmd](data)
}

const handerSend = () => {
  if (!value.value) {
    Toast('说点什么')
    return false
  }
  ws.ws.send(value.value)
  value.value = ''
}

const randColor = () => {
  const min = 0
  const max = 8
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  return `color_${rand}`
}
</script>

<style lang="scss" scoped>
// .danmu {
// }
.emit {
  width: 100%;
  position: fixed;
  top: 61vh;
  left: 0;
  z-index: 0;
  text-align: center;
  .input {
    opacity: 0.3;
    border: 1px solid #0693e3;
    padding: 0.5em 1em;
    border-radius: 6px;
    transition: all 0.6s;
    &:focus {
      opacity: 1;
    }
  }
}
.skk-dm {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100vw;
  height: 300px;
  z-index: 0;
  .danmu-item {
    color: #eb144c;
    // color: var(--skk-red);
  }

  .color_0 {
    color: #8ed1fc;
  }
  .color_1 {
    color: #ff6900;
  }
  .color_2 {
    color: #fcb900;
  }
  .color_3 {
    color: #00d084;
  }
  .color_4 {
    color: #0693e3;
  }
  .color_5 {
    color: #eb144c;
  }
  .color_6 {
    color: #9900ef;
  }
  .color_7 {
    color: #f78da7;
  }
  .color_8 {
    color: #9166ff;
  }
}
</style>
