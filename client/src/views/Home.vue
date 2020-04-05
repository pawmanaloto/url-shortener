<template>
  <div class="home container mx-auto">
    <div class="flex">
      <div class="flex-1">
        <h1 class="text-5xl text-white mb-5">Want to make your links, shorter in easy way?</h1>
        <p class="text-white mb-12">ShortURL allows to reduce long links from Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened URL and share it on websites, chat and e-mail. After shortening the URL, check how many clicks it received.</p>
        <shorten-url-form></shorten-url-form>
      </div>
      <div class="flex-1"></div>
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
