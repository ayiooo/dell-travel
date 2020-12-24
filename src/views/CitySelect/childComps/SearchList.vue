<template>
  <div class="search__list"></div>
</template>

<script>
export default {
  name: 'SearchList'
}
</script>

<style lang="scss" scoped>
.search__list {
  position: fixed;
  z-index: 9;
  top: 0.86rem;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: tomato;
}
</style>
