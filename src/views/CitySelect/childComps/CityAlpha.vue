<template>
  <div class="city__alpha">
      <div class="alpha__item" v-for="(citems, key) in cities" :key="key">
        <div class="alpha__item__name" :ref="key">{{key}}</div>
        <div class="alpha__item__cities" >
          <div class="alpha__item__cityname border-bottom-1px" v-for="city in citems" :key="city.id" @click="changeCity(city.name)">
            {{city.name}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: {
      type: Object,
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
.alpha__item {
  &__name {
    line-height: .4rem;
    background-color: $color-light-grey;
  }
  &__cityname {
    line-height: .4rem;
  }
}
</style>
