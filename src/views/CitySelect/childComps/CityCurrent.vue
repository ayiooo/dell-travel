<template>
  <div class="city__current">
    <div class="city__current__position">我的位置</div>
    <div class="city__current__wrapper">
      <div class="city__current__item">北京</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityCurrent'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixin.scss';
.city__current {
  &__position {
    line-height: 0.3rem;
    background-color: $color-light-grey;
  }
  &__wrapper {
    display: flex;
    padding: 0.05rem 0.1rem;
  }
  &__item {
    @include border-1px($color-primary, 0.05rem);
    color: $color-primary;
    line-height: 0.3rem;
    padding: 0 0.3rem;
  }
}
</style>
