<template>
  <div class="photo">
    <div class="heat">❤️</div>
    <div class="t">雨下整夜我的爱溢出就像雨水</div>
    <div class="t">我只取一瓢爱了解</div>

    <div class="big vanishOut">
      <van-image
        lazy-load
        width="100%"
        fit="cover"
        src="http://p7.qhimg.com/bdr/__85/t019b33324373313025.jpg"
      />
    </div>

    <div class="i">
      <div class="t">
        <p class="e">The story of the two</p>
        <van-divider :style="{ borderColor: '#bbb' }" />
        <p class="n">
          <span>斯人若彩虹</span>
          <span>遇上方知有</span>
        </p>
      </div>
      <div class="u">
        <div class="i" v-for="i in user" :key="i.id">
          <van-image round width="7.8em" height="7.8em" :src="i.avatar" />
          <p class="n">
            {{ i.name }}
          </p>
          <p class="c" v-for="(_i, __i) in i.c" :key="__i">{{ _i }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Divider as vanDivider } from 'vant'
import { ref } from 'vue'

const user = ref([
  {
    id: 1,
    name: '寻梦',
    avatar: 'http://p7.qhimg.com/bdr/__85/t019b33324373313025.jpg',
    c: ['长风破浪会有时', '无意苦争春', '扶摇直上九万里'],
  },
  {
    id: 2,
    name: '被梦寻',
    avatar: 'http://p7.qhimg.com/bdr/__85/t019b33324373313025.jpg',
    c: ['长风破浪会有时', '无意苦争春', '扶摇直上九万里'],
  },
])
</script>

<style lang="scss" scoped>
.photo {
  & > div {
    margin: 10px 0;
  }
  margin-top: 4em;
  text-align: center;
  .heat {
    text-align: center;
  }
  .big {
    padding: 8px;
    // border: 1px solid #000;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 5px #333;
  }
  .i {
    .t {
      margin: 4em 0 0 0;
    }
    .e {
      font-weight: 600;
      font-size: 1.2em;
      font-family: 'Fira Code', FiraCode, Consolas, 'Courier New', monospace;
    }
    .n {
      span {
        margin: 0 5px;
        letter-spacing: 0.2em;
      }
    }
    .u {
      width: 86%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      margin-top: 2.8em;
      .i {
        // width: 46%;
        // background-color: #000;
        .n {
          font-size: 1.3em;
          margin: 10px 0;
          color: #ff6900;
        }
        .c {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
