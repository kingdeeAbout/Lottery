<template>
  <div class="scroll-wrapper anim">
    <div v-for="item in items" class="scroll-item">{{item.name}}</div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        animate:false,
        items:[
          {name:"137xxxx3761:抽中8.8元现金红包"},
          {name:"137xxxx3762:抽中快递员名片"},
          {name:"137xxxx3763:抽毛线抽"}
        ]
      }
    },
    created(){
      setInterval(this.scroll,2000)
    },
    methods: {
      scroll(){
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)
      }
    }
  }
</script>

<style scoped lang="less">
  .scroll-wrapper {
    text-align: left;
    padding-left: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    overflow: hidden;
    .anim{
      transition: all 0.5s;
      margin-top: -30px;
    }
    .scroll-item {
      margin-top: 7px;
    }
    #con1 li{
      list-style: none;
      line-height: 30px;
      height: 30px;
    }
  }
</style>