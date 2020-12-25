<template>
  <div class="category">
    <div v-for="cate in cates" :key="cate.title">
      <div class="detail__cate">
        <!-- 因为是一张大的图片，用作背景图，而不是直接写一个 img！！！ -->
        <div class="detail__cate__piao"></div>
        <div class="detail__cate__content">
          {{ cate.title }}
        </div>
      </div>
      <DetailCate v-if="cate.children" :cates="cate.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCate',
  props: {
    cates: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  padding: 0rem 0.1rem;
}
.detail__cate {
  display: flex;
  padding: 0.1rem 0rem;
  align-content: center;
  justify-content: flex-start;
  &__piao {
    width: 20px;
    height: 20px;
    background-image: url('~assets/images/detail.png');
    background-size: 20px 150px;
    background-position-y: -22px;
  }
}
</style>
