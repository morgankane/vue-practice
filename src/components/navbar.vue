<template>
  <header class="row">
    {{ $route.params.items }}
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
          <router-link :to="homeLink" tag="li"><a class="nav-link">home</a></router-link>
          <router-link :to="menuLink" tag="li"><a class="nav-link">menu</a></router-link>
      </ul>
    </nav>

  </header>
</template>


<script>
export default {
  data () {
    return {
      homeLink: '/',
      menuLink: '/mainmenu'
    }
  }
}

</script>

<style>

header {
  margin-bottom: 20px;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
}

.navbar-brand {
  font-size: 1.5em;
}

.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  margin-right: 15px;
}

</style>
