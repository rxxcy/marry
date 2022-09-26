<template>
  <main>
    <app-header />
    <app-meta />
    <app-photo />
  </main>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import appHeader from './components/app-header.vue'
import appMeta from './components/app-meta.vue'
import appPhoto from './components/app-photo.vue'
</script>

<style lang="scss">
$app-left: 10px;
$app-top: 16px;

* {
  margin: 0;
}
body {
  font-family: HarmonyOS_Regular;
  color: #34495e;
  background-color: #f7f8fa;
  font-size: 14px;
}
main {
  min-height: calc(100vh - ($app-top * 2));
  padding: $app-top $app-left;
}

:root {
  --skk-red: rgb(159, 69, 68);
  --skk-grey: rgb(242, 242, 242);
  --Ga0_u: #f6f7f8;
  --Ga1_u: #f1f2f3;
  --Ga2_u: #e3e5e7;
  --Ga3_u: #c9ccd0;
  --Ga4_u: #aeb3b9;
  --Ga5_u: #9499a0;
  --Ga6_u: #797f87;
  --Ga7_u: #61666d;
  --Ga8_u: #484c53;
  --Ga9_u: #2f3238;
  --Ga10_u: #18191c;
  --Ga11_u: #ffffff;
  --Ga12_u: #f1f2f3;
  --Wh0_u: #ffffff;
  --Ba0_u: #000000;
  --Pi0_u: #fff3f6;
  --Pi1_u: #ffecf1;
  --Pi2_u: #ffd9e4;
  --Pi3_u: #ffb3ca;
  --Pi4_u: #ff8cb0;
  --Pi5_u: #ff6699;
  --Pi6_u: #e84b85;
  --Pi7_u: #d03171;
  --Pi8_u: #ad1c5b;
  --Pi9_u: #771141;
  --Pi10_u: #3f0723;
  --Ma0_u: #fef3fc;
  --Ma1_u: #fdebfa;
  --Ma2_u: #fbd7f4;
  --Ma3_u: #f7aeeb;
  --Ma4_u: #f286e2;
  --Ma5_u: #ee5ddb;
  --Ma6_u: #da41cb;
  --Ma7_u: #c525ba;
  --Ma8_u: #9b1797;
  --Ma9_u: #670f67;
  --Ma10_u: #330834;
  --Re0_u: #fef3f2;
  --Re1_u: #feecea;
  --Re2_u: #fdd7d4;
  --Re3_u: #fcafaa;
  --Re4_u: #fa857f;
  --Re5_u: #f85a54;
  --Re6_u: #e23d3d;
  --Re7_u: #c9272c;
  --Re8_u: #9f1922;
  --Re9_u: #710e18;
  --Re10_u: #3b060d;
  --Or0_u: #fff6ee;
  --Or1_u: #fff0e3;
  --Or2_u: #ffe1c7;
  --Or3_u: #ffc18f;
  --Or4_u: #ffa058;
  --Or5_u: #ff7f24;
  --Or6_u: #e95b03;
  --Or7_u: #bb4100;
  --Or8_u: #8d2d00;
  --Or9_u: #5e1b00;
  --Or10_u: #2f0c00;
  --Ye0_u: #fffaef;
  --Ye1_u: #fff6e4;
  --Ye2_u: #ffeec9;
  --Ye3_u: #ffdb93;
  --Ye4_u: #ffc65d;
  --Ye5_u: #ffb027;
  --Ye6_u: #e58900;
  --Ye7_u: #b76800;
  --Ye8_u: #8a4a00;
  --Ye9_u: #5b2e00;
  --Ye10_u: #2f1600;
  --Ly0_u: #fffcec;
  --Ly1_u: #fffadf;
  --Ly2_u: #fff5bf;
  --Ly3_u: #ffea80;
  --Ly4_u: #ffdc40;
  --Ly5_u: #ffcc00;
  --Ly6_u: #d5a300;
  --Ly7_u: #aa7d00;
  --Ly8_u: #805a00;
  --Ly9_u: #553900;
  --Ly10_u: #2b1b00;
  --Lg0_u: #f7fbef;
  --Lg1_u: #f2f9e4;
  --Lg2_u: #e3f2c8;
  --Lg3_u: #c7e691;
  --Lg4_u: #a9d95b;
  --Lg5_u: #88cc24;
  --Lg6_u: #66b105;
  --Lg7_u: #4e8e04;
  --Lg8_u: #376a03;
  --Lg9_u: #224702;
  --Lg10_u: #102301;
  --Gr0_u: #effbf3;
  --Gr1_u: #e4f8ea;
  --Gr2_u: #caf1d6;
  --Gr3_u: #95e4af;
  --Gr4_u: #5fd689;
  --Gr5_u: #2ac864;
  --Gr6_u: #0eb350;
  --Gr7_u: #089043;
  --Gr8_u: #046e35;
  --Gr9_u: #034926;
  --Gr10_u: #012414;
  --Cy0_u: #edfbfb;
  --Cy1_u: #e2f8f8;
  --Cy2_u: #c4eff0;
  --Cy3_u: #89e1e1;
  --Cy4_u: #4fd3d1;
  --Cy5_u: #14c4bf;
  --Cy6_u: #02aaaa;
  --Cy7_u: #018488;
  --Cy8_u: #015f66;
  --Cy9_u: #013d44;
  --Cy10_u: #001d22;
  --Lb0_u: #ecfafe;
  --Lb1_u: #dff6fd;
  --Lb2_u: #bfedfa;
  --Lb3_u: #80daf6;
  --Lb4_u: #40c5f1;
  --Lb5_u: #00aeec;
  --Lb6_u: #008ac5;
  --Lb7_u: #00699d;
  --Lb8_u: #004b76;
  --Lb9_u: #002f4f;
  --Lb10_u: #001627;
  --Bl0_u: #f3f5ff;
  --Bl1_u: #ebef;
}
</style>
