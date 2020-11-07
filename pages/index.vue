<template>
  <div v-if="page">
    <Hero
      :sub-title="page.hero.title_2"
      :title="page.hero.title_1"
      :tag-line="page.hero.tagline"
    ></Hero>
    <div class="w-full max-w-screen-xl mx-auto">
      <section v-if="hasFeatures" class="px-4 py5 md:py-4">
        <ul class="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-8">
          <li
            v-for="feature in page.features"
            :key="feature.id"
            class="mt-10 md:mt-0"
          >
            <feature-block
              :sub-title="feature.tagline"
              :title="feature.heading"
              :content="feature.copy"
              :icon="feature.icon"
            ></feature-block>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
export default {
  components: { FeatureBlock, Hero },
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
    hasFeatures() {
      return !_.isEmpty(this.page.features)
    },
    hasSections() {
      return !_.isEmpty(this.page.sections)
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
