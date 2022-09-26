<template>
  <div class="header">
    <h1 class="title">『红豆&生南国』- 明月照沟渠</h1>
    <div class="time">
      <span>海上生明月</span>
      <span>2022-02-22</span>
    </div>

    <div class="sub">
      <div class="fan"></div>
      <div class="a">-WEDDING INVITATION-</div>
      <div class="b">W & C</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  .title {
    font-size: 22px;
    margin-left: -12px;
    color: #323233;
  }
  .time {
    margin-top: 0.5em;
  }
  .sub {
    margin-top: 2em;
    text-align: center;
    font-size: 1.15em;
    .fan {
      margin: 0.5em auto;
      width: 24px;
      height: 24px;
      border-radius: 3px;
      background-color: var(--skk-red);
    }
    .b {
      margin: 1em 0;
    }
    .a {
      margin: 1.5em 0 1em 0;
    }
  }
}
</style>
