<template>
  <div v-if="page">
    <Hero
      :title="page.hero.title_1"
      :sub-title="page.hero.title_2"
      :tag-line="page.hero.tagline"
    ></Hero>

    <Features :items="features"></Features>
    <Sections :items="sections"></Sections>
    <under-construction></under-construction>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Sections from '@/components/Sections'
import UnderConstruction from '~/components/UnderConstruction'

export default {
  components: { UnderConstruction, Sections, Features, Hero },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/multipass/index`).fetch()

    return {
      page,
    }
  },
  computed: {
    features() {
      return _.sortBy(this.page.features, 'weight')
    },
    sections() {
      return _.sortBy(this.page.sections, 'weight')
    },
  },
}
</script>
<style scoped>
.hero {
  background-image: linear-gradient(
      to right bottom,
      rgba(246, 246, 246, 0.25),
      rgb(48, 72, 75)
    ),
    url('~assets/img/hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
