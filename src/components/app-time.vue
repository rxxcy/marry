<template>
  <div class="time">
    <van-divider :style="{ borderColor: '#34495e' }" />
    <div class="i">
      <!-- <p>今日所邀</p>
      <p>皆是生命中 不同阶段 重要的你们</p>
      <p>这样特殊的一天</p>
      <p>希望有你的见证 期待有你的参与</p> -->
    </div>
    <div class="t">
      <!-- <p class="e">💒 <span>婚礼时间</span> 💒</p>
      <p class="o">2020年10月06日 <span class="week">星期四</span></p>
      <p class="o">农历九月十一号</p>
      <p class="o">17:00</p> -->
      <div class="out">
        <div class="item">
          <p>{{ day }}</p>
          <p>天</p>
        </div>
        <div class="item">
          <p>{{ hour }}</p>
          <p>时</p>
        </div>
        <div class="item">
          <p>{{ minute }}</p>
          <p>分</p>
        </div>
        <div class="item">
          <p>{{ second }}</p>
          <p>秒</p>
        </div>
      </div>

      <div class="cal">
        <Calendar
          backgroundText
          completion
          :select-date="selectModeDate"
          class-name="month"
          mode="monthRange"
          :monthRange="['2022-10']"
          :weeks="weeks"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, reactive, ref } from 'vue'
import { Divider as vanDivider } from 'vant'
import Calendar from 'mpvue-calendar'

const timer = reactive({ value: null })

const day = ref(0)
const hour = ref(0)
const minute = ref(0)
const second = ref(0)

const selectModeDate = '2022-10-6'
const weeks = ['一', '二', '三', '四', '五', '六', '日']

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
    let total = fine.value - n
    let _day = ~~(total / (3600 * 24))
    total = total - _day * 3600 * 24
    let _hour = ~~(total / 3600)
    total = total - _hour * 3600
    let _minute = ~~(total / 60)
    let _second = total - _minute * 60
    // console.log(`${_day}天${_hour}时${_minute}分${_second}秒`)
    day.value = pop0(_day)
    hour.value = pop0(_hour)
    minute.value = pop0(_minute)
    second.value = pop0(_second)
  }, 1000)
}

const pop0 = x => (x > 9 ? x : `0${x}`)

// onUpdated(() => {
//   clearInterval(timer.value)
//   startCountdown()
// })
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
    margin-bottom: 30px;
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
.cal {
  .month {
    margin: 0 auto;
  }
}
:deep(.vc-day-selected:before) {
  background-color: var(--skk-red) !important;
}
</style>
