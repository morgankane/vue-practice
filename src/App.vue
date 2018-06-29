<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <mainfooter></mainfooter>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import mainfooter from './components/mainfooter.vue'

export default {
  components: {
    navbar,
    mainfooter
  }
}
</script>

<style>

</style>
