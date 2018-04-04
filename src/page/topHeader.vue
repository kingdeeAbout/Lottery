<template>
  <div class="header-wrapper">
    <div class="element">
      <div class="back" @click="goBack"></div>
      <div class="title">{{title}}</div>
      <div class="prize" @click="prizeSee"></div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      title: {
        type: String,
        default: "快递员福利社"
      }
    },
    methods: {
      goBack () {
        history.go(-1)
      },
      prizeSee () {
        this.$router.push({"path": "/prize"});
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";

  .header-wrapper {
    height: 43px;
    /*position: fixed;*/
    /*width: 100%;*/
    background-color: @header-color;
    .element {
      position: relative;
      .back {
        .bg-image("navigationbar-icon");
        width: 16px;
        height: 17px;
        position: absolute;
        left: 15px;
        top: 10px;
      }
      .title {
        text-align: center;
        line-height: 43px;
        vertical-align: middle;
        font-family: STHeitiSC-Medium;
        font-size: @font-18;
      }
      .prize {
        .bg-image("ico-Award-winningrecord");
        width: 18px;
        height: 20px;
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }
  }

</style>