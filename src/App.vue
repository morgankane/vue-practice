<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
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
