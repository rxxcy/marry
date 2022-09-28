<template>
  <div class="address">
    <div class="t">
      <p class="o">💒 <span>地址</span> 💒</p>
      <p class="o a">长虹宴会厅</p>
      <p class="o">二楼新厅</p>
    </div>
    <div class="m">地图</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.address {
  text-align: center;
  .o {
    margin: 0.8em 0;
  }
  .a {
    font-size: 1.4em;
    font-weight: 600;
    color: #000;
  }
  .m {
    width: 100%;
    height: 350px;
    background-color: #f78da7;
    border-radius: 8px;
  }
}
</style>
