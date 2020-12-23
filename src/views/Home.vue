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
import { getHomeData } from 'network/home'
export default {
  name: 'Home',
  components: {
    VHeader
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const data = await getHomeData()
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
}
</style>
