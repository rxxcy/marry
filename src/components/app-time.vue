<template>
  <div class="time">
    <vant-divider :style="{ borderColor: '#34495e' }" />
    <div class="i">
      <p>今日所邀</p>
      <p>皆是生命中 不同阶段 重要的你们</p>
      <p>这样特殊的一天</p>
      <p>希望有你的见证 期待有你的参与</p>
    </div>
    <div class="t">
      <p class="e">💒 <span>婚礼时间</span> 💒</p>
      <p class="o">2020年10月06日 <span class="week">星期四</span></p>
      <p class="o">农历九月十一号</p>
      <p class="o">17:00</p>
      <div class="out">
        <div class="item">
          <p>{{ d }}</p>
          <p>天</p>
        </div>
        <div class="item">
          <p>{{ h }}</p>
          <p>时</p>
        </div>
        <div class="item">
          <p>{{ i }}</p>
          <p>分</p>
        </div>
        <div class="item">
          <p>{{ s }}</p>
          <p>秒</p>
        </div>
      </div>
    </div>
  </div>
  {{ timer }}
</template>

<script setup>
import { onMounted, onUpdated, reactive, ref } from 'vue'
import { Divider as vantDivider } from 'vant'

const timer = reactive({ value: null })

const d = ref(0)
const h = ref(0)
const i = ref(0)
const s = ref(0)

const fine = ref('2022-10-06 17:00:00')

onMounted(() => {
  clearInterval(timer.value)
  fine.value = ~~(new Date(fine.value).getTime() / 1e3)
  startCountdown()
})

const startCountdown = () => {
  clearInterval(timer.value)
  timer.value = setInterval(() => {
    const n = ~~(new Date().getTime() / 1e3)
    const total = fine.value - n
    d.value = ~~(total / (24 * 60 * 60)) //计算整bai数天du数
    const miao = total - d.value * 24 * 60 * 60 //取得值算出天数后dao剩余的转秒数shu
    h.value = ~~(miao / (60 * 60)) //计算整数小时数
    i.value = total - d.value * 24 * 60 * 60 - h.value * 60 * 60 //取得算出小时数后剩余的秒数
    let min = ~~(i.value / 60) //计算整数分
    s.value = total - d.value * 24 * 60 * 60 - h.value * 60 * 60 - min * 60
  }, 1000)
}

onUpdated(() => {
  // clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.time {
  text-align: center;
  .i {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 30px;
  }
  .e {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--skk-red);
  }
  .o {
    font-size: 1.1em;
    margin: 20px 0;
  }
  .out {
    display: flex;
    justify-content: center;
    .item {
      width: 50px;
      height: 60px;
      background-color: var(--skk-time-bgc);
      margin: 0.5em;
      border-radius: 8px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:first-child {
        font-size: 1.4em;
      }
    }
  }
}
</style>
