<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  // 给 key赋值以免因为组件复用而不刷新页面
  computed: {
    key() {
      return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
  }
}
</script>

<style>
</style>
