<template>
  <div class="shorten-url-form overflow-hidden rounded-full relative">
    <input type="text" class="py-5 pl-5 pr-20 w-full" placeholder="Make your links shorter">
    <button class="btn-shorter rounded-full py-5 px-5 absolute">Shorten</button>
  </div>
</template>

<script>
export default {
  name: 'ShortenUrlForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-shorter {
  top: 0;
  right: 0;
}
</style>
