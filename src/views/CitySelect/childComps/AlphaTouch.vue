<template>
  <div
    class="alpha"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    ref="alpha"
  >
    <div class="alpha__item" v-for="a in alpha" :key="a">{{a}}</div>
  </div>
</template>

<script>
export default {
  name: 'AlphaTouch',
  props: {
    alpha: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isTouch: false
    }
  },
  mounted () {
    this.offsetTop = this.$refs.alpha.offsetTop
  },
  methods: {
    handleTouchStart (e) {
      // 这里得到容器所在高度，每一格的高度
      this.isTouch = true
    },
    handleTouchMove (e) {
      const y = e.touches[0].clientY
      // console.log(y)
      // console.log(this.offsetTop)
      let index = Math.floor((y - 10 - this.offsetTop) / 25)
      if (index > this.alpha.length) {
        index = this.alpha.length
      }
      this.$emit('handleScrollToElement', index)
    },
    handleTouchEnd () {
      this.isTouch = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';

.alpha {
  position: fixed;
  top: 0.9rem;
  padding: .1rem 0;
  z-index: 9;
  right: .2rem;
  background-color: tomato;
  &__item {
    line-height: 0.24rem;
    padding: 0 .1rem;
    text-align: center;
    color: $color-primary;
    text-transform: uppercase;
  }
}
</style>
