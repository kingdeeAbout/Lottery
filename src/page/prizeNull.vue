<template>
  <div class="prizeNull-wrapper">
    <img src="../assets/img/pic-Noprizes@2x.png" class="prizeNull-img"/>
    <div class="prizeNull-text">您还没有获得奖品哦</div>
  </div>
</template>
<script>
  export default{}
</script>

<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";

  .prizeNull-wrapper {
    .prizeNull-img {
      width: 160px;
      height: 145px;
      display: block;
      margin: 0 auto;
      margin-top: 152px;
    }
    .prizeNull-text {
      text-align: center;
      font-size: @font-18;
      color: @font-huise;
      margin-top: 25px;
    }
  }
</style>