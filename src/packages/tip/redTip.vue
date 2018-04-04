/**
@visible 是否显示 Tip	boolean	—	false
*/
<template>
  <div class="red-tip-wrapper" v-if="visible">
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

  .red-tip-wrapper {
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
      width: 85%;
      background-color: @white-color;
      border-radius: 20px;
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
        .bg-image("message");
        font-size: @font-20;
        color: @font-white;
        text-align: center;
        padding-top: 37px;
        padding-bottom: 13px;
        border-bottom: 1px solid @border-color;
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