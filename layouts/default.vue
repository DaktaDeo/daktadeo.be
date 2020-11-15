<template>
  <div class="bg-primary-color-light">
    <Header></Header>
    <Nuxt />
    <Footer :socials="socials.follow"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: { Footer, Header },
  async fetch() {
    this.socials = await this.$content(`${this.$i18n.locale}/socials`).fetch()
  },
  data() {
    return {
      socials: [],
    }
  },
  created() {
    this.$fetch()
  },
}
</script>
