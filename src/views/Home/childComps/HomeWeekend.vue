<template>
  <div class="home__weekend">
    <div class="home__weekend__title">周末去哪二</div>
    <div class="weekend__list">
      <div class="weekend__item border-bottom-1px" v-for="item in weekendList" :key="item.id">
        <img class="weekend__item__img" :src="item.imgUrl" alt="">
        <div class="weekend__item__info">
          <div class="weekend__item__title">{{item.title}}</div>
          <div class="weekend__item__desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables.scss";
.home__weekend {
  &__title {
    font-size: .16rem;
    background-color: $color-light-grey;
    line-height: .32rem;
  }
}
.weekend__item {
  padding: .1rem 0;
  &__img {
    width: 100%;
  }
  &__info {
    flex: 1;
    margin-left: .05rem;
    font-size: .16rem;
  }
  &__title {
    font-weight: bold;
  }
  &__desc {
    margin-top: .05rem;
    color: $color-grey;
  }
}
</style>
