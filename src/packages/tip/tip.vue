/**
@visible 是否显示 Tip	boolean	—	false
*/
<template>
  <div class="tip-wrapper" v-if="visible">
    <div class="tip-container">
      <div class="tip-close" @click="close"></div>
      <div class="tip-title">
        <img src="../../assets/img/tishi1@2x.png" class="tip-title-img"/>
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
        default: "123"
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

  .tip-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .tip-container {
      position: relative;
      width: 85%;
      background-color: @white-color;
      .tip-close {
        width: 24px;
        height: 24px;
        .bg-image("icon_close");
        color: @font-black;
        text-align: center;
        position: absolute;
        right: 12px;
        top: 12px;
      }
      .tip-title {
        //.bg-image("message");
        font-size: @font-20;
        color: @font-zero;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 13px;
        border-bottom: 1px solid @border-color;
        .tip-title-img {
          width: 20px;
          height: 20px;
          display: inline-block;
        }
      }
      .tip-content {
        margin: 20px 21px 43px 24px;
        font-size: @font-17;
        color: @font-black;
        text-align: center;
      }
    }
  }
</style>