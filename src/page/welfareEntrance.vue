<template>
  <div class="welfareEntrance-wrapper">
    <!--<topHeader :title="title"></topHeader>-->
    <tip :visible="tipVisible" @handleClose="tipClose" title="温馨提示">
      <div class="tip-content">成功收取1单快递就可以来抽奖啦！</div>
    </tip>
    <div class="card-top">
      <div class="title pt25">收件抽红包</div>
      <img src="../assets/img/pic@2x.png" class="prize-img">
      <div class="rule">
        即日起至3月30日,每天成功收件1票,即可获得1次抽奖机会,参与抽取现金红包以及其他礼物
      </div>
      <div class="flex-box">
        <div class="box-item">
          <div class="box-item-bg cash"></div>
          <div class="box-item-title">现金红包</div>
        </div>
        <div class="box-item">
          <div class="box-item-bg free"></div>
          <div class="box-item-title">免费短信</div>
        </div>
        <div class="box-item">
          <div class="box-item-bg card"></div>
          <div class="box-item-title">快递名片</div>
        </div>
        <div class="box-item">
          <div class="box-item-bg material"></div>
          <div class="box-item-title">快递耗材</div>
        </div>
      </div>
      <div class="scroll">
        <scroll></scroll>
      </div>
      <div class="times">今日抽奖次数: 1次</div>
    </div>
    <div class="card-bottom">
      <button class="lottery-button" @click ="clickcallback">点击抽奖</button>
    </div>
  </div>
</template>

<script>
  import topHeader from './topHeader.vue'
  import scroll from '../components/scroll.vue'
  import tip from '../packages/tip/tip.vue'

  export default{
    data () {
      return {
        title: "我的奖品",
        tipVisible: false
      }
    },
    created () {
      this.openTip();
    },
    methods: {
      openTip ()  {
        this.tipVisible = true;
      },
      tipClose () {
        this.tipVisible = false;
      },
      clickcallback () {
        this.$router.push({path: "/welfare"})
      }
    },
    components:{
      topHeader: topHeader,
      scroll: scroll,
      tip: tip
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";


  .welfareEntrance-wrapper {
    .card-top {
      .height(520px, 560px);
      text-align: center;
      .bg-image("background");
      font-size: @font-14;
      .title {
        font-family: SourceHanSansCN-Medium;
        font-size: @font-30;
        line-height: 28px;
      }
      .prize-img {
        width: 70%;
        margin-top: -15px;
      }
      .rule {
        width: 296px;
        margin: 0 auto;
        padding-top: 10px;
      }
      .box-item {
        margin-top: 23px;
        .box-item-bg {
          width: 40px;
          height: 40px;
          margin: 0 auto;
        }
        .box-item-title {
          margin-top: 12px;
          line-height: 13px;
        }
        .cash {
          .bg-image("ico-Redenvelopes")
        }
        .free {
          .bg-image("ico-Shortmessage")
        }
        .card {
          .bg-image("ico-card")
        }
        .material {
          .bg-image("ico-material")
        }
      }
    }
    .scroll {
      margin: 22px 29px 18px 29px;
      border: solid 1px @white-color;
      line-height: 13px;
    }
    .card-bottom {
      margin-top: 16px;
      padding-bottom: 30px;
      .lottery-button {
        width: 80%;
        height: 49px;
        background-color: @button-color;
        border-radius: 30px;
        border: none;
        display: block;
        margin: 0 auto;
        box-shadow: 0 3px 15px @button-color;
        color: @font-white;
        font-size: @font-17;
        line-height: 16px;
      }
    }
  }
</style>