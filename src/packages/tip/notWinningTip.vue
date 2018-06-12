/**
@visible 是否显示 Tip	boolean	—	false
*/
<template>
  <div class="not-winning-tip-wrapper" v-if="visible">
    <div class="tip-container">
      <div class="tip-close" @click="close"></div>
      <div class="tip-title">
        {{title}}
      </div>
      <div class="tip-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    created () {

    },
    props: {
      title: {
        type: String,
        default: ""
      },
      redTitle: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.$emit('handleClose');
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../assets/less/color";
  @import "../../assets/less/mixin";

  .not-winning-tip-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .tip-container {
      position: relative;
      width: 100%;
      height: 480px;
      .bg-image("popup-redenvelopes");

      .tip-title {
        font-size: @font-20;
        color: @luck-title;
        text-align: center;
        padding-top: 110px;
        padding-bottom: 13px;
      }
      .tip-content {
        margin: 20px 21px 43px 24px;
        font-size: @font-17;
        color: @font-black;
        text-align: center;
      }
    }
  }
  @media(min-device-width:360px)and(max-device-height:736px)and(-webkit-min-device-pixel-ratio:2){
    /*iphone6/plus*/
    .tip-close {
      width: 24px;
      height: 24px;
      .bg-image("icon_close");
      color: @font-black;
      text-align: center;
      position: absolute;
      right: 75px;
      top: 70px;
      z-index: 100;
    }
  }
  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2) {
    /* 兼容iphone5 */
    .tip-close {
      width: 24px;
      height: 24px;
      .bg-image("icon_close");
      color: @font-black;
      text-align: center;
      position: absolute;
      right: 40px;
      top: 70px;
    }
  }
</style>