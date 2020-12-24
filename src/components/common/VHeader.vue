<template>
  <div class="header">
    <div class="header__left">
      <slot name="left"></slot>
    </div>
    <div class="header__center">
      <slot name="center"></slot>
    </div>
    <div class="header__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VHeader'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
.header {
  display: flex;
  align-items: center;
  height: 0.43rem;
  background-color: $color-primary;
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.43rem;
  color: #fff;
  &__left,
  &__right {
    min-width: 0.5rem;
  }
  &__center {
    flex: 1;
  }
}
</style>
