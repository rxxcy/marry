<template>
  <footer class="footer">
    <van-divider :style="{ borderColor: '#bbb' }" />

    <div class="p">
      <van-image
        lazy-load
        width="100%"
        fit="cover"
        src="https://qiniu.fdc.xp.yn.cn/uploads/20220928/cba1bc1feb7d18811c34164cd94ac2de.jpg"
      />
    </div>

    <div class="t">新/人/的/碎/碎/念</div>
    <div class="ip">
      <p class="i" v-for="(i, x) in tips" :key="x">{{ i }}</p>
    </div>
    <p>❤️</p>
    <div class="k">感谢您 / 百忙之中 / 为我们祝福</div>

    <div class="m"><span class="at">@</span> 王立 于 2022.09.28</div>
  </footer>
</template>

<script setup>
import { Divider as vanDivider } from 'vant'
import { ref } from 'vue'
const tips = ref([
  '秋水共长天一色',
  '落霞与孤鹜齐飞',
  '蒹葭苍苍白露为霜',
  '匪来贸丝来即我谋',
  '准备好您的心情和好胃口',
  '开开心心赴约吧',
])
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  .t {
    margin-top: 50px;
    letter-spacing: 0.2em;
    font-weight: 600;
  }
  .ip {
    margin: 18px 0;
    .i {
      margin: 8px 0;
    }
  }
  .k {
    color: var(--skk-red);
  }
  .m {
    text-align: left;
    .at {
      font-family: 'Courier New';
    }
    margin-top: 50px;
    font-family: 'SKK_HWXK';
    font-size: 10px;
    color: #dcdee0;
  }
}
</style>
