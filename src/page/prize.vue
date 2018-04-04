<template>
  <div class="prize-wrapper">
    <!--<topHeader :title="title"></topHeader>-->
    <prize-content v-if="prize"></prize-content>
    <prize-null v-else></prize-null>
  </div>
</template>
<script>
  import topHeader from './topHeader.vue'
  import prizeContent from './prizeContent.vue'
  import prizeNull from './prizeNull.vue'

  export default{
    data () {
      return {
        title: "我的奖品",
        prize: true,
      }
    },
    created () {

    },
    components: {
      topHeader: topHeader,
      prizeContent: prizeContent,
      prizeNull: prizeNull
    }
  }
</script>


<style scoped lang="less">
  @import "../assets/less/color";
  @import "../assets/less/mixin";

  .prize-wrapper {
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top: 0;*/
  }
</style>