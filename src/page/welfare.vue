<template>
  <div class="welfare-wrapper">
    <!--<topHeader :title="title"></topHeader>-->

    <!--次数用完提示-->
    <tip :visible="tipVisible" @handleClose="tipClose" title="温馨提示">
      <div>今天的抽奖机会用完了哦，明天再接再厉！</div>
    </tip>

    <!--红包、短信说明-->
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


    <!--短信 耗材-->
    <luck-tip :visible="luckTipVisible"  @handleClose="luckyTipClose" :title="luckTipTitle">
      <div class="check-prize" @click="checkPrize">点击查看</div>
    </luck-tip>

    <!--未中奖说明-->
    <not-winning-tip :visible="notWinningVisible"  @handleClose="notWinningTipClose" title="很遗憾，您没有中奖哦！">
    </not-winning-tip>

    <!--红包-->
    <red-envelope-tip :visible="redEnvelopeTipVisible"  @handleClose="redEnvelopeTipClose" title="恭喜您获得8.8元现金红包">
      <div class="code">红包兑换码: ASDFGHJJ</div>
      <div class="copy-code" @click="copyCode">复制兑换码</div>
    </red-envelope-tip>

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
  import notWinningTip from '../packages/tip/notWinningTip.vue'
  import redEnvelopeTip from '../packages/tip/redEnvelopeTip.vue'
  import Api from '../api/welfareApi'

  const api = new Api();

  export default{
    data() {
      return {
        title: "我的奖品",
        tipVisible: false,
        redTipVisible: false,
        luckTipVisible: false,
        notWinningVisible: false,
        redEnvelopeTipVisible: false,
        redTip: {
          text: "说明",
          method: "现金红包领取方法"
        },
        redTipTitle: redTip.text,
        luckTipTitle: "恭喜您获得100条免费短信",
        prize: 1,
        reward: {},
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
      notWinningOpenTip ()  {
        this.notWinningVisible = true;
      },
      notWinningTipClose () {
        this.notWinningVisible = false;
      },
      checkPrize () {
        this.$router.push({path: "/prize"})
      },
      redEnvelopeTipOpen () {
        this.redEnvelopeTipVisible = true;
      },
      redEnvelopeTipClose () {
        this.redEnvelopeTipVisible = false;
      },
      copyCode () {
        this.redOpenTip();
      },
      beforeLottery(resolve,reject){

        /*
         * send ajax to get result and pass to child component
         **/
        // get result : this.prize
        if (this.reward){
          this.prize = this.reward.point;
        }
        this.getWelfare();
        setTimeout(()=>{
          resolve();
        },10);

      },
      afterLottery(){
        if (!this.reward) {
          this.notWinningOpenTip();
        } else {
          if (this.reward.type === 4) {
            this.luckyOpenTip();
          }
          if (this.reward.type === 0) {
            this.redEnvelopeTipOpen();
          }
          if (this.reward.type === 1) {
            this.redEnvelopeTipOpen();
          }
        }
//        this.prize = 2;
//        this.openTip();
//        this.luckyOpenTip();
//        this.redOpenTip();
//        this.redEnvelopeTipOpen();
//        alert('draw'+ this.prize);
      },
      getWelfare(){
        api.getWelfare({userId: "817124089", activityId: "11981459"}).then((data) => {
          if (data.status === "200") {
            console.log(data);
            this.reward = data.data;
          } else {

          }

        })
      }
    },
    components:{
      topHeader: topHeader,
      lottery: lottery,
      redTip: redTip,
      tip: tip,
      luckTip: luckTip,
      redEnvelopeTip: redEnvelopeTip,
      notWinningTip: notWinningTip
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
    .code {
      margin: 0 auto;
      margin-top: 140px;
      width: 70%;
      color: @font-white;
    }
    .copy-code {
      background-color: #FFEF64;
      color: @luck-button;
      padding: 11px 43px 12px 44px;
      width: 35%;
      margin: 0 auto;
      margin-top: 10px;
      border-radius: 20px;
    }
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