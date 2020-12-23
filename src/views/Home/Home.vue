<template>
  <div class="home">
    <VHeader>
      <template #center>
        <span>首页</span>
      </template>
    </VHeader>
    <HomeSwiper :swiperList="swiperList" />
    <HomeCates :iconList="iconList" />
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from 'cm/VHeader'
import HomeSwiper from './childComps/HomeSwiper'
import HomeCates from './childComps/HomeCates'
import HomeRecommend from './childComps/HomeRecommend'
import HomeWeekend from './childComps/HomeWeekend'
import { getHomeData } from 'network/home'
export default {
  name: 'Home',
  components: {
    VHeader,
    HomeSwiper,
    HomeCates,
    HomeRecommend,
    HomeWeekend
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
  },
  methods: {
    async getData () {
      const data = await getHomeData()
      console.log(data)
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
