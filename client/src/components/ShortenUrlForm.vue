<template>
  <div class="shorten-url-form flex overflow-hidden relative">
    <input v-model="url" type="text" class="py-5 px-5 w-full border-b border-gray-400 focus:outline-none focus:shadow-outline" placeholder="Make your links shorter">
    <button @click.prevent="shorten" class="btn-shorter text-white bg-gray-900 hover:bg-gray-700 transition duration-300 rounded-full py-5 px-5 w-48">Shorten 🚀</button>
  </div>
</template>

<script>
import ShortenUrlService from '@/services/ShortenUrlService';

export default {
  name: 'ShortenUrlForm',
  data() {
    return {
      url: ''
    }
  },
  methods: {
    async shorten() {
      try {
        const shorten = await ShortenUrlService.shorten(this.url);
        console.log(shorten)
      } catch (error) {
        console.log(error.message)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
