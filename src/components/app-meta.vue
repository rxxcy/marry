<template>
  <div class="container">
    <van-image lazy-load width="100%" src="http://p7.qhimg.com/bdr/__85/t019b33324373313025.jpg" />
    <div class="w">" HELLO 刮风这天我试过握着你手，但偏偏雨渐渐大到我看你不见 "</div>
    <div class="y">
      <div class="left">
        <p>如果爱情画在起雾的窗是模糊还是更清楚</p>
        <p>周杰伦</p>
      </div>
      <div class="right">
        <van-image
          lazy-load
          width="64px"
          height="64px"
          fit="cover"
          src="http://p7.qhimg.com/bdr/__85/t019b33324373313025.jpg"
        />
      </div>
    </div>
    <div class="x">囍</div>

    <div class="j">
      <div class="name">
        <span>🎉</span>
        <div class="username">寻梦</div>
        <span class="heat">❤️</span>
        <div class="username">被寻梦</div>
        <span>🎉</span>
      </div>
      <div class="m">
        <div class="item">
          <div class="c">潮汐退和涨</div>
          <div class="e">Together with our parents</div>
        </div>
        <div class="item">
          <div class="c">潮汐退和涨</div>
          <div class="e">Sincerely invite you</div>
        </div>
        <div class="item">
          <div class="c">潮汐退和涨</div>
          <div class="e">Attend our wedding reception</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  .w {
    font-family: 'SKK_HWXK';
    font-size: 1.3em;
    width: 80.8%;
    margin: 0 auto;
    text-align: center;
    margin: 3em;
  }
  .y {
    background-color: var(--skk-grey);
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    .left {
      flex: 1;
    }
    .right {
      margin-left: 1em;
      width: 64px;
      border-top-left-radius: 1em;
    }
  }
  .x {
    font-family: 'SKK_HWXK';
    font-size: 8.8em;
    text-align: center;
    margin: 0.46em 0;
    color: var(--skk-red);
  }
  .j {
    text-align: center;
    .name {
      display: flex;
      justify-content: center;
      .username {
        width: 6em;
        font-size: 1.2em;
      }
    }
    .m {
      // color: ;
      .item {
        margin: 24px 0;
        .c {
          letter-spacing: 0.4em;
          margin-bottom: 0.2em;
        }
      }
    }
  }
}
</style>
