<template>
  <div id="app">
    <div id="nav" class="text-center text-white text-6xl">
      URL Shortener
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  position: absolute;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
