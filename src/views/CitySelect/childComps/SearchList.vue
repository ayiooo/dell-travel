<template>
  <div class="search__list">
    <Scroll class="search__list__scroll">
      <div
        class="search__list__item border-bottom-1px"
        v-for="city in filterCities"
        :key="city.id"
      >
        {{ city.name }}
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'cm/Scroll'
export default {
  name: 'SearchList',
  props: {
    filterCities: {
      type: Array,
      required: true
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
.search__list {
  position: fixed;
  z-index: 999;
  top: 0.86rem;
  right: 0;
  left: 0;
  bottom: 0;

  &__scroll {
    height: 100%;
    /* background-color: tomato; */
    background-color: #fff;
  }
  &__item {
    line-height: .4rem;
  }
}
</style>
