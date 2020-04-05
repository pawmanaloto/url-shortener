<template>
  <div id="app" class="bg-gray-900 h-screen">
    <div id="nav" class="text-center text-white text-6xl">
      URL Shortener
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
