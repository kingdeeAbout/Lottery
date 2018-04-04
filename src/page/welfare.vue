<template>
  <div class="welfare-wrapper">
    <!--<topHeader :title="title"></topHeader>-->

    <tip :visible="tipVisible" @handleClose="tipClose" title="温馨提示">
      <div>今天的抽奖机会用完了哦，明天再接再厉！</div>
    </tip>

    <red-tip :visible="redTipVisible" @handleClose="redTipClose" :title="redTipTitle">
      <div v-if="redTipTitle == redTip.text">100条短信将于2个工作日内自动赠送到您收件端账号</div>
      <div v-else="redTipTitle == redTip.method">
        <div class="red-bag-mid">
          复制兑换码之后，关注快递100收件端公众号，将兑换码发送到公众号领取现金红包
        </div>
        <div class="red-bag-bot">
          <div class="red-bag-bot-weixin">公众号链接：</div>
          <div class="red-bag-bot-link">XXXXXXXXXXXXXXXXXXXXX</div>
        </div>
      </div>
    </red-tip>

    <luck-tip :visible="luckTipVisible"  @handleClose="luckyTipClose" title="恭喜您获得100条免费短信">
      <div class="check-prize" @click="checkPrize">点击查看</div>
    </luck-tip>

    <div class="lottery-center">
      <div class="lottery-center-title">收件抽红包</div>
      <div class="lottery-ani">
        <lottery :beforeLottery="beforeLottery" :lotteryBtn="lotteryBtn" :prizesList="prizesList" :prize="prize" :afterLottery="afterLottery"></lottery>
      </div>
    </div>
    <div class="welfare-time">您还剩1次机会</div>
  </div>
</template>
<script>
  import topHeader from './topHeader.vue'
  import lottery from '../packages/lottery/lottery.vue'
  import redTip from '../packages/tip/redTip.vue'
  import tip from '../packages/tip/tip.vue'
  import luckTip from '../packages/tip/luckTip.vue'

  export default{
    data() {
      return {
        title: "我的奖品",
        tipVisible: false,
        redTipVisible: false,
        luckTipVisible: false,
        redTip: {
          text: "说明",
          method: "现金红包领取方法"
        },
        redTipTitle: redTip.text,
        prize:0,
        prizesList:[
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png'),
          require('../assets/img/pic-Redenvelopes@2x.png')
        ],
        lotteryBtn:{
          img : require('../assets/img/pic-Immediatelydrawaprize@2x.png')
        }
      };
    },
    created () {

    },
    methods:{
      openTip ()  {
        this.tipVisible = true;
      },
      tipClose () {
        this.tipVisible = false;
      },
      redOpenTip (tip)  {
        this.redTipVisible = true;
        this.redTipTitle = tip;
      },
      redTipClose () {
        this.redTipVisible = false;
      },
      luckyOpenTip ()  {
        this.luckTipVisible = true;
      },
      luckyTipClose () {
        this.luckTipVisible = false;
      },
      checkPrize () {
        this.$router.push({path: "/prize"})
      },
      beforeLottery(resolve,reject){

        /*
         * send ajax to get result and pass to child component
         **/

        // get result : this.prize
        setTimeout(()=>{
          this.prize = 1;
          resolve();
        },10);

      },
      afterLottery(){
        this.luckyOpenTip();
//        alert('draw'+ this.prize);
      }
    },
    components:{
      topHeader: topHeader,
      lottery: lottery,
      redTip: redTip,
      tip: tip,
      luckTip: luckTip
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";
  .welfare-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    .bg-image("backgroud");
    .check-prize {
      background-color: #FFEF64;
      color: @luck-button;
      padding: 11px 43px 12px 44px;
      width: 35%;
      margin: 0 auto;
      margin-top: 160px;
      border-radius: 20px;
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
    .lottery-center {
      //.bg-image("lamp");
      //height: 536px;
      //width: 100%;
      //margin: 0 auto;
      padding-top: 50px;
      margin-bottom: 19px;
      .lottery-ani {
        width: 75%;
        .height("312px", "340px");
        margin: 0 auto;
        padding: 20px;
        background-image: url("../assets/img/lamp-ios3.gif");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
      }
    }
    .welfare-time {
      width: 40%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: @font-15;
      background-color: #FFB7AB;
      margin: 0 auto;
      border-radius: 20px;
    }
    padding-bottom: 20px;
  }

  @media(min-device-width:414px)and(max-device-width:736px)and(-webkit-min-device-pixel-ratio:3){
    /*iphone6plus*/
    .lottery-center-title {
      width: 66%;
      height: 67px;
      //.height("74px", "60px");
      .bg-image("redTitle");
      margin: 0 auto;
      text-align: center;
      line-height: 60px;
      font-size: @font-24;
    }
  }
  @media(min-device-width:360px)and(max-device-height:667px)and(-webkit-min-device-pixel-ratio:2){
    /*iphone6*/
    .lottery-center-title {
      width: 66%;
      height: 67px;
      //.height("74px", "60px");
      .bg-image("redTitle");
      margin: 0 auto;
      text-align: center;
      line-height: 60px;
      font-size: @font-24;
    }
  }
  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
    /* 兼容iphone5 */
    .lottery-center-title {
      width: 78%;
      height: 67px;
      //.height("74px", "60px");
      .bg-image("redTitle");
      margin: 0 auto;
      text-align: center;
      line-height: 60px;
      font-size: @font-24;
    }
  }
</style>