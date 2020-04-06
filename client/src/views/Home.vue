<template>
  <div class="home">
    <div class="hero-container flex items-center bg-gray-900">
      <div class="container mx-auto flex">
        <div class="flex-1">
          <h1 class="text-5xl text-white mb-5">Want to make your links, shorter in easy way?</h1>
          <p class="text-white mb-12">URL Shortener allows to reduce long links from Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. After shortening the URL, check how many clicks it received.</p>  
        </div>
        <div class="flex-1"></div>
      </div>
    </div>
    <div class="container mx-auto rounded-full bg-white py-8 px-12 -m-16 shadow">
      <shorten-url-form></shorten-url-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ShortenUrlForm from '@/components/ShortenUrlForm.vue'

export default {
  name: 'Home',
  components: {
    ShortenUrlForm
  }
}
</script>

<style>
  .hero-container {
    min-height: 650px;
  }
</style>