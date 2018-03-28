<template>
    <div class="test">
        <a href="">从about跳转到demo1</a>
        <group>
            <cell title="title" value="value"></cell>
        </group>
    </div>
</template>
<script>
  import { Group, Cell } from 'vux'
  export default{
    components: {
      Group,
      Cell
    }
  }
</script>

<style scoped lang="less">
    @import "../assets/less/color";
    .test {
        background-color: @tips-color;
    }
</style>