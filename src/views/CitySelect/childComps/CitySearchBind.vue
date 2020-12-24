<template>
  <div class="city__search">
    <h1>{{city}}</h1>
      <input
        class="search__input"
        type="text"
        placeholder="请输入城市名或拼音"
        :value="city"
        @input="handleInputChange"
        maxlength="20"
      />
      <i class="iconfont iconsousuo"></i>
    </div>
</template>

<script>
export default {
  name: 'CitySearchBind',
  props: {
    city: String
  },
  methods: {
    handleInputChange (e) {
      this.$emit('update:city', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
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
</style>
