<template>
  <div class="home">
    <VHeader >
      <template #center>
        <span>首页</span>
      </template>
    </VHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from 'cm/VHeader'
export default {
  name: 'Home',
  components: {
    VHeader
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.box {
}
</style>
