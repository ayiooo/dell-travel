<template>
  <div class="back__bar">
    <i class="iconfont iconfanhui"></i>
  </div>
</template>

<script>
export default {
  name: 'DetailBackBar'
}
</script>

<style lang="scss" scoped>
.back__bar{
  padding: .1rem;
  position: fixed;
  top: 0;
  left: 0;
  .iconfont {
    display: inline-block;
    line-height: .3rem;
    text-align: center;
    color: white;
    font-size: .12rem;
    font-weight: bold;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: rgba($color: #000000, $alpha: .5)
  }
}
</style>
