<template>
  <div id="app">
<!--    <keep-alive>-->
   <router-view v-if="isReload"></router-view>
<!--    </keep-alive>-->
  </div>
</template>
<script>
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isReload: true
    }
  },
  methods: {
    reload() {
      this.isReload = false
      this.$nextTick(() => {
        this.isReload = true
      })
    }
  }
}
</script>

<style>
</style>
