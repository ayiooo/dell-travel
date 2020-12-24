<template>
  <div class="home">
    <VHeader>
      <template #center>
        <span>首页</span>
      </template>
    </VHeader>
    <Scroll ref="scroll" class="custon-scroll-height">
      <HomeSwiper :swiperList="swiperList"/>
      <HomeCates :iconList="iconList" />
      <HomeRecommend :recommendList="recommendList" />
      <HomeWeekend :weekendList="weekendList"  @loadOver="handleLoadOver"/>
    </Scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from 'cm/VHeader'
import HomeSwiper from './childComps/HomeSwiper'
import HomeCates from './childComps/HomeCates'
import HomeRecommend from './childComps/HomeRecommend'
import HomeWeekend from './childComps/HomeWeekend'
import Scroll from 'cm/Scroll'

import { getHomeData } from 'network/home'
import { debounce } from 'utils'
export default {
  name: 'Home',
  components: {
    VHeader,
    HomeSwiper,
    HomeCates,
    HomeRecommend,
    HomeWeekend,
    Scroll
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getData()
    this.debounceRefresh = debounce(this.$refs.scroll.refresh)
  },
  methods: {
    // 获取数据
    async getData () {
      const data = await getHomeData()
      // console.log(data)
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    },
    // 轮播图加载完成执行回调
    handleLoadOver () {
      this.debounceRefresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.custon-scroll-height {
  height: calc(100vh - 0.43rem);
}
</style>
