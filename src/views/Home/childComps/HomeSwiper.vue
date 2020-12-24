<template>
  <div class="home__swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id"
        ><img :src="item.imgUrl" @load="handleLoad" alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    swiperList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  methods: {
    handleLoad () {
      this.$emit('loadOver')
    }
  }
}
</script>

<style lang="scss" scoped>
.home__swiper {
  height: 0;
  padding-bottom: 31.5%;
  font-size: 0;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
