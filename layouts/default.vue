<template>
  <div
    class="
      bg-primary-color-light
      flex flex-col
      min-h-screen
      justify-between
      h-full
    "
  >
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <div class="antialiased text-gray-900 min-h-full flex-1 flex-col">
      <Nuxt />
    </div>
    <Footer :socials="socials.follow" :nav="nav.footer"></Footer>
  </div>
</template>

<script>
// class="mb-auto"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AutoSEO } from '~/mixins'
export default {
  components: { Footer, Header },
  mixins: [AutoSEO],
  data() {
    return {
      socials: [],
      nav: [],
    }
  },
  async fetch() {
    this.socials = await this.$content(`${this.$i18n.locale}/socials`).fetch()
    this.nav = await this.$content(`${this.$i18n.locale}/nav`).fetch()
  },
  created() {
    this.$fetch()
  },
}
</script>
<style>
body {
  @apply font-sans text-black leading-tight antialiased bg-gray-100;
}
</style>
