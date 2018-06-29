<template>
  <header class="row">

    <nav class="navbar navbar-toggleable-md navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link">home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mainmenu"><a class="nav-link">menu</a></router-link>
        </li>
      </ul>
    </nav>

  </header>
</template>


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

</style>
