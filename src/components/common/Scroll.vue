<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    scrollOption: {
      type: Object,
      default () {
        return {
          // 是否监听滚动 0 不监听， 2、3 监听
          probeType: 0,
          // 触发点击
          click: true,
          // 是否监听上拉加载更多
          pullUpLoad: false
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const { probeType, pullUpLoad } = this.scrollOption
      this.bs = new BetterScroll(this.$refs.wrapper, this.scrollOption)
      if (probeType === 2 || probeType === 3) {
        this.bs.on('scroll', this.listenScrollPosition)
      }
      if (pullUpLoad) {
        // 监听到上拉我们让它干什么，完成之后需要执行 this.bs.finishPullUp()，这里需要让
        this.bs.on('pullingUp', this.pullingUpHandler)
      }
    },
    refresh () {
      console.log('refresh')
      this.bs && this.bs.refresh && this.bs.refresh()
    },
    scrollToTop (delay = 200) {
      this.bs && this.bs.scrtollTo && this.bs.scrtollTo(0, 0, delay)
    },
    listenScrollPosition (position) {
      // 向下滚动 y 为负值
      const { y } = position
      // 用于界面监听 y 的值进行一些逻辑判断。
      this.$emit('listenCurrentY', -y)
    },
    // 下拉的时候发送下拉事件
    pullingUpHandler () {
      this.$emit('pullingUp')
    },
    // 下拉的数据加载完成之后执行完成下拉操作
    finishPullUp () {
      this.bs && this.bs.finishPullUp && this.bs.finishPullUp()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper  {
  overflow: hidden;
  /* background-color: tomato; */
}
</style>
