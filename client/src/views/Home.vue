<template>
  <div class="home">
    <section class="hero-container flex items-center bg-gray-900">
      <div class="container mx-auto flex">
        <div class="flex-1">
          <h1 class="text-5xl text-white mb-5">Want to make your links, shorter in easy way?</h1>
          <p class="text-white mb-12">URL Shortener allows to reduce long links from Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. After shortening the URL, check how many clicks it received.</p>  
        </div>
        <div class="flex-1"></div>
      </div>
    </section>
    <div class="container mx-auto rounded-full bg-white py-8 px-12 -m-16 shadow z-10">
      <shorten-url-form></shorten-url-form>
    </div>
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <blob-card icon="handshake" title-blob="Trusted" />
          <blob-card icon="link" title-blob="Shortened" />
          <blob-card icon="lock" title-blob="Secure" />
          <blob-card icon="chart-area" title-blob="Statistics" />
          <blob-card icon="search-location" title-blob="Reliable" />
          <blob-card icon="project-diagram" title-blob="Shortened" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ShortenUrlForm from '@/components/ShortenUrlForm.vue'
import BlobCard from '@/components/BlobCard.vue'

export default {
  name: 'Home',
  components: {
    ShortenUrlForm,
    BlobCard
  }
}
</script>

<style>
  .hero-container {
    min-height: 650px;
  }
</style>