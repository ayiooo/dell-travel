<template>
  <div class="home__recommend">
    <div class="home__recommend__title">为你推荐</div>
    <div class="recommend__list">
      <div class="recommend__item border-bottom-1px" v-for="item in recommendList" :key="item.id" @click="handleItemClick(item.id)">
        <img class="recommend__item__img" :src="item.imgUrl" alt="">
        <div class="recommend__item__info">
          <div class="recommend__item__title">{{item.title}}</div>
          <div class="recommend__item__desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleItemClick (id) {
      this.$router.push({
        name: 'Detail',
        params: { id: id }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables.scss";
.home__recommend {
  &__title {
    font-size: .16rem;
    background-color: $color-light-grey;
    line-height: .32rem;
  }
}
.recommend__item {
  display: flex;
  padding: .1rem 0;
  &__img {
    width: .85rem;
    height: .85rem;
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
