<template>
  <div class="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view></router-view>
  </div>
</template>

<script>

import MHeader from './components/m-header'
import MTab from './components/m-tab'

export default {

  name: 'App',

  data () {
    return {

    }
  },
  components: {
    MHeader,
    MTab
  }
}
</script>

<style lang="less" scoped>
</style>
