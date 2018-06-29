<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="container">
      <admin></admin>
    </div>
    <div class="container">
      <mainfooter></mainfooter>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import mainfooter from './components/mainfooter.vue'
import Home from './components/Home.vue'
import mainmenu from './components/mainmenu.vue'
import admin from './components/admin.vue'

export default {
  components: {
    navbar,
    mainfooter,
    Home,
    mainmenu,
    admin
  }
}
</script>

<style>

</style>
