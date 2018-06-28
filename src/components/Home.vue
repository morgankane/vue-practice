<template>

    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>Welcome to Pizza Planet!</h1>
            <h2>Feeling Hungry?</h2>
            <button class="btn btn-success">Let's order!</button>
        </div>
      </div>
    </div>

</template>

<style>
#home {
  background: url('../assets/cover.jpg');
  height:800px;
  background-repeat: none;
  background-size:cover;
  padding: 10%;
}

h1, h2 {
  margin: 6%;
}

.background {
  background: #eee;
  opacity:.8;
  max-width: 60%;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
