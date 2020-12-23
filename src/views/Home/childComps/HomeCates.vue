<template>
  <div class="home__cates">
    <Swiper>
      <SwiperSlide v-for="(page, index) in one8iconList" :key="index">
        <div class="cate__container">
          <div class="cate__item" v-for="item in page" :key="item.id">
            <img class="cate__img" :src="item.imgUrl" alt="" />
            <h3 class="cate__desc">{{ item.desc }}</h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { splitArrayByCount } from 'utils'
import 'swiper/css/swiper.css'
export default {
  name: 'HomeCates',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  computed: {
    one8iconList () {
      const pageCount = 8
      return splitArrayByCount(this.iconList, pageCount)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
.home__cates {
  height: 0;
  padding-bottom: 48.53%;
  margin: .1rem 0;
  overflow: hidden;
  color: $color-light-grey;
  .cate {
    &__container {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      padding: .05rem 0;
      width: 25%;
      font-size: 0.12rem;
      text-align: center;
    }
    &__img {
      width: 0.62rem;
      margin-bottom: .05rem;
    }
  }
}
</style>
