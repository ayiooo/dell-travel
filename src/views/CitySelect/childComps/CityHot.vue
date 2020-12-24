<template>
  <div class="city__hot">
    <div class="city__hot__name">热门城市</div>
    <div class="city__hot__list">
      <div class="city__hot__item" @click="changeCity(city.name)" v-for="city in hotCities" :key="city.id">
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHot',
  props: {
    hotCities: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeCity (name) {
      this.$emit('changeCity', name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixin.scss';
.city__hot {
  &__name {
    line-height: 0.3rem;
    background-color: $color-light-grey;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    padding-right: 20%;
    padding-bottom: .1rem;
    justify-content: space-evenly;
  }
  &__item {
    @include border-1px($color-primary, 0.05rem);
    color: $color-primary;
    line-height: 0.3rem;
    width: 26%;
    text-align: center;
    margin-top: .1rem;
  }
}
</style>
