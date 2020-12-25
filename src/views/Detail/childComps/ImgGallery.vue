<template>
  <div class="gallery">
    <div class="swiper__container" v-if="gallaryImgs.length" @click="$emit('hide')">
      <swiper class="fuck__swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index"
          ><img class="img" :src="item" alt=""
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ImgGallery',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    gallaryImgs: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper__container >>> .swiper-container {
  overflow: unset;
}
.gallery {
  display: flex;
  z-index: 999;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
}
.swiper__container {
  width: 100%;
  position: relative;
  overflow: unset;
  .fuck__swiper{
    overflow: unset;
  }
  .img {
    width: 100%;
  }
}
.swiper-pagination {
  color: #fff;
  position: relative;
  top: .1rem;
}
</style>
