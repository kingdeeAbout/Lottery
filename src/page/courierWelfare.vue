<template>
  <div>
    <div class="courierWelfare-wrapper">
      <!--<topHeader></topHeader>-->
      <div class="mr">
        <div class="activity-card"  @click ="clickcallback">
        </div>
        <div class="activity-time">
          <span>活动时间：2018/03/15-2018/03/20</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import topHeader from './topHeader.vue'

  export default{
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      clickcallback () {
        this.$router.push({path: "/welfareEntrance"})
      }
    },
    components:{
      topHeader: topHeader
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";

  .courierWelfare-wrapper {
    .mr {
      margin: 16px;
      .activity-card {
        height: 164px;
        .bg-image("card")
      }
      .activity-time {
        padding-top: 14px;
        padding-left: 16px;
        padding-bottom: 16px;
        font-size: @font-14;
        color: @font-huise;
        background-color: @white-color;
      }
    }
  }
</style>