<template>
  <div v-if="page">
    <Hero
      :title="page.hero.title_1"
      :sub-title="page.hero.title_2"
      :tag-line="page.hero.tagline"
    ></Hero>

    <Features :items="features"></Features>
    <Sections :items="sections"></Sections>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Sections from '@/components/Sections'

export default {
  components: { Sections, Features, Hero },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/index`).fetch()
    const prints = await $content(`${defaultLocale}/3d/prints`, { deep: true })
      .without(['body'])
      .where({ type: 'prints' })
      .fetch()

    return {
      prints: _.map(prints, (page) => ({
        ...page,
        path: _.replace(page.path, `/${defaultLocale}`, ''),
        // slug: _.kebabCase(_.replace(page.title, '&', '-and-')),
      })),
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
      rgba(209, 213, 219, 0.25),
      rgb(31, 41, 55)
    ),
    url('~assets/img/hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
