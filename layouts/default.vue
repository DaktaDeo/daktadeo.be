<template>
  <div class="bg-primary-color-light flex flex-col h-screen justify-between">
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <Nuxt />
    <Footer :socials="socials.follow" :nav="nav.footer"></Footer>
  </div>
</template>

<script>
// class="mb-auto"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: { Footer, Header },
  async fetch() {
    this.socials = await this.$content(`${this.$i18n.locale}/socials`).fetch()
    this.nav = await this.$content(`${this.$i18n.locale}/nav`).fetch()
  },
  data() {
    return {
      socials: [],
      nav: [],
    }
  },
  created() {
    this.$fetch()
  },
}
</script>
