<template>
  <div class="home">
    <VHeader>
      <template #center>
        <span>首页</span>
      </template>
    </VHeader>
    <HomeSwiper :swiperList="swiperList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from 'cm/VHeader'
import HomeSwiper from './childComps/HomeSwiper'
import { getHomeData } from 'network/home'
export default {
  name: 'Home',
  components: {
    VHeader,
    HomeSwiper
  },
  data () {
    return {
      swiperList: []
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
      console.log(this.swiperList)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
