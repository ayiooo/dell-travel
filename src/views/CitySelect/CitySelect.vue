<template>
  <div class="city__select">
    <VHeader>
      <template #left>
        <i class="iconfont iconfanhui" @click="$router.go(-1)"></i>
      </template>
      <template #center>城市选择</template>
    </VHeader>
    <!-- 城市搜索 -->
    <CitySearch v-model="searchCity" />
    <!-- <CitySearchBind :city.sync="searchCity"/> -->
    <!-- 位置展示
      1. 我的位置
      2. 热门城市
      3. A - Z 为 title， 下面为城市
      4. 右侧 A-Z的滑动栏
    -->

    <Scroll class="city__scroll__wrapper" ref="scroll">
      <!-- 当前城市 -->
      <CityCurrent :currentCity="currentCity" />
      <!-- 热门推荐 -->
      <CityHot :hotCities="hotCities" @changeCity="changeCity" />
      <!-- 字母表列表城市 -->
      <CityAlpha :cities="cities" ref="cityAlpha" @changeCity="changeCity" />
    </Scroll>

    <!-- 搜索结果 -->
    <SearchList v-if="searchCity.length" :filterCities="filterCities" />
    <AlphaTouch :alpha="alpha" @handleScrollToElement="handleScrollToElement" />
  </div>
</template>

<script>
import VHeader from 'cm/VHeader'
import CitySearch from './childComps/CitySearch'
// import CitySearchBind from './childComps/CitySearchBind'
import CityCurrent from './childComps/CityCurrent'
import CityHot from './childComps/CityHot'
import CityAlpha from './childComps/CityAlpha'
import SearchList from './childComps/SearchList'
import AlphaTouch from './childComps/AlphaTouch'
import Scroll from 'cm/Scroll'

import { getCityData } from 'network/city'
import { debounce } from 'utils'
import { mapState } from 'vuex'
export default {
  name: 'CitySelect',
  components: {
    VHeader,
    CitySearch,
    // CitySearchBind,
    CityCurrent,
    CityHot,
    CityAlpha,
    SearchList,
    AlphaTouch,
    Scroll
  },
  data () {
    return {
      searchCity: '',
      cities: {},
      hotCities: [],
      filterCities: []
    }
  },
  mounted () {
    this.getCityData()
    this.scroll = this.$refs.scroll
    this.debounceRefreshFilterCities = debounce(() => {
      // 直接这样写有点太消耗性能！！！ 我们封装到函数里
      const { searchCity, cities } = this
      const list = []
      for (const key in cities) {
        cities[key].forEach(item => {
          if (item.name.indexOf(searchCity) > -1 || item.spell.indexOf(searchCity) > -1) {
            list.push(item)
          }
        })
      }
      this.filterCities = list
    })
  },
  methods: {
    async getCityData () {
      try {
        const data = await getCityData()
        this.cities = data.cities
        this.hotCities = data.hotCities
        console.log(this.cities)
        console.log(this.hotCities)
        return data
      } catch (err) {
        console.log(err)
      }
    },
    handleScrollToElement (index) {
      const s = this.alpha[index]
      const el = this.$refs.cityAlpha.$refs[s][0]
      console.log(s)
      console.log(el)
      this.scroll.scrollToElement(el)
    },
    changeCity (name) {
      this.$router.push({ path: '/' })
      this.$store.dispatch('changeCity', name)
    }
  },
  computed: {
    alpha () {
      return Object.keys(this.cities)
    },
    ...mapState(['currentCity'])
  },
  watch: {
    searchCity (newVal, oldVal) {
      this.debounceRefreshFilterCities()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixin.scss';
.city__select {
  font-size: 0.16rem;
}
.city__scroll__wrapper {
  height: calc(100vh - 0.86rem);
}
</style>
