<template>
  <div class="prizeContent-wrapper">
    <tip :visible="tipVisible" @handleClose="tipClose" :title="tipTitle">
      <div v-if="tipTitle == tip.message" class="message">100条短信将于2个工作日内自动赠送到您收件端账号</div>
      <div v-else="tipTitle == tip.redBag" class="red-bag">
        <div class="red-bag-top">
          <span>红包兑换码:</span>
          <span class="red-bag-link">ASDFGHJJ</span>
        </div>
        <button class="red-bag-copy">复制</button>
        <div class="red-bag-mid">
          复制兑换码后，关注快递100收件端公众号，将兑换码发送到公众号领取现金红包
        </div>
        <div class="red-bag-bot">
          <div class="red-bag-bot-weixin">公众号链接：</div>
          <div class="red-bag-bot-link">XXXXXXXXXXXXXXXXXXXXX</div>
        </div>
      </div>
    </tip>
    <div class="prize-content">
      <div class="prize-title">奖品记录</div>
      <div class="prize-cards">
        <div class="prize-card" @click="openTip(tip.message)"  v-for="(item, index) in prizeList">
          <img v-if= "item.type == 321026001" src="../assets/img/ico-Prizerecord-card@2x.png">
          <img v-else-if= "item.type == 321026000" src="../assets/img/ico-Redenvelopes@2x.png">
          <img v-else-if= "item.type == 321026003" src="../assets/img/ico-priserecord-shortmassage@2x.png">
          <img v-else-if= "item.type == 321026004" src="../assets/img/ico-priserecord-material@2x.png">
          <div class="prize-card-title">
            <div class="prize-card-title-kind">{{item.title}}</div>
            <div class="prize-card-title-time">中奖日期： {{item.createTime}}</div>
          </div>
          <div class="prize-card-status">
            <div v-if="item.status == '1'">未领取</div>
            <div v-else-if="item.status == '2'" class="active">已领取</div>
            <div v-else-if="item.status == '3'" class="active">领取中</div>
          </div>
        </div>
        <!--<div class="prize-card" @click="openTip(tip.redBag)">-->
          <!--<img src="../assets/img/ico-Redenvelopes@2x.png">-->
          <!--<div class="prize-card-title">-->
            <!--<div class="prize-card-title-kind">快递员名片一盒</div>-->
            <!--<div class="prize-card-title-time">中奖日期： 2018-03-06</div>-->
          <!--</div>-->
          <!--<div class="prize-card-status">已领取</div>-->
        <!--</div>-->
        <!--<div class="prize-card" @click="openTip(tip.redBag)">-->
          <!--<img src="../assets/img/ico-priserecord-shortmassage@2x.png">-->
          <!--<div class="prize-card-title">-->
            <!--<div class="prize-card-title-kind">快递员名片一盒</div>-->
            <!--<div class="prize-card-title-time">中奖日期： 2018-03-06</div>-->
          <!--</div>-->
          <!--<div class="prize-card-status">已领取</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import tip from '../packages/tip/tip.vue'
  import Api from '../api/prizeApi'

  const api = new Api();

  export default{
    data () {
      return {
        tipVisible: false,
        tip: {
          message: "短信领取说明",
          redBag: "红包"
        },
        tipTitle: tip.message,
        prizeList: []
      }
    },
    created () {
      this.getPrizeList();
    },
    methods: {
      openTip(tip) {
        this.tipVisible = true;
        this.tipTitle = tip;
      },
      tipClose() {
        this.tipVisible = false;
      },
      getPrizeList() {
        api.getPrizeList({userId: 817124089}).then((data) => {
          if(data.status === "200") {
            this.prizeList = data.data;
//            console.log("data", data)
          } else {

          }
        })
      }
    },
    components:{
      tip: tip
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";

  .prizeContent-wrapper {
    .red-bag {
      font-size: @font-15;
      .red-bag-top {
        font-size: @font-17;
        .red-bag-link {
          color: #F42A2A;
        }
      }
      .red-bag-copy {
        color: @font-white;
        background-color: #FF7F02;
        padding: 15px 81px;
        border: none;
        margin-top: 20px;
        margin-bottom: 25px;
      }
      .red-bag-bot {
        text-align: left;
        margin-top: 13px;
        .red-bag-bot-weixin {
          display: inline-block;
        }
        .red-bag-bot-link {
          color: #317EE7;
          display: inline-block;
        }
      }

    }
    .prize-content {
      .prize-title {
        font-size: @font-18;
        text-align: center;
        color: #000000;
        height: 53px;
        line-height: 53px;
        vertical-align: middle;
        background-color: @white-color;
        margin-top: 15px;
      }
      .prize-card {
        padding-left: 18px;
        padding-top: 12px;
        padding-bottom: 11px;
        background-color: @white-color;
        border-top: 1px solid @border-color;
        position: relative;
        > img {
          width: 34px;
          height: 35px;
        }
        .prize-card-title {
          color: @font-black;
          display: inline-block;
          margin-left: 16px;
          .prize-card-title-kind {
            font-size: @font-15;
          }
          .prize-card-title-time {
            color: @font-huise;
            font-size: @font-12;
          }
        }
        .prize-card-status {
          display: inline-block;
          color: @font-huise;
          font-size: @font-15;
          position: absolute;
          top: 20px;
          right: 32px;
          .active {
            color: @active;
          }
        }
      }
    }
  }
</style>