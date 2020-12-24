<template>
  <div class="city__select">
    <VHeader>
      <template #left>
        <i class="iconfont iconfanhui"></i>
      </template>
      <template #center>城市选择</template>
    </VHeader>
    <!-- 城市搜索 -->
    <div class="city__search">
      <input
        class="search__input"
        type="text"
        placeholder="请输入城市名或拼音"
        v-model="searchCity"
        maxlength="20"
      />
      <i class="iconfont iconsousuo"></i>
    </div>
    <!-- 位置展示
      1. 我的位置
      2. 热门城市
      3. A - Z 为 title， 下面为城市
      4. 右侧 A-Z的滑动栏
    -->
    <div class="position">
      <div class="name">我的位置</div>
      <div class="city__wrapper">
        <div class="city__item">
          北京
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
  </div>
</template>

<script>
import VHeader from 'cm/VHeader'
export default {
  name: 'CitySelect',
  components: {
    VHeader
  },
  data () {
    return {
      searchCity: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import "~assets/scss/mixin.scss";
.city__select {
  font-size: .16rem;
}
.city__search {
  background-color: $color-primary;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  font-size: 0;
  height: 0.43rem;
  display: flex;
  align-items: center;
  .search__input {
    border: none;
    outline: none;
    width: 100%;
    line-height: 0.24rem;
    padding: 0 0.1rem;
    text-align: center;
    &::placeholder {
      color: $color-grey;
    }
  }
  .iconfont {
    position: relative;
    left: -0.24rem;
  }
}
.position {
  .name {
    line-height: .3rem;
    background-color: $color-light-grey;
  }
  .city__wrapper{
    display: flex;
    padding: .05rem .1rem;
    .city__item {
      @include border-1px($color-primary, .05rem);
      color: $color-primary;
      line-height: .30rem;
      padding: 0 .3rem;
    }
  }
}
</style>
