<template>
  <div class="search__list"></div>
</template>

<script>
export default {
  name: 'SearchList'
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
  background-color: tomato;
}
</style>
