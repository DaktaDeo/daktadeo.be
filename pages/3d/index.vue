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
      <section v-if="prints" class="px-4 py8 md:py-16 pt-4">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none pb-4"
        >
          <h2
            class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl"
          >
            Prints
          </h2>
          <p class="text-xl leading-7 text-gray-500">
            Met 3D printen kan je de gekste dingen maken:
          </p>
        </div>

        <ul
          class="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8"
        >
          <li v-for="print in prints" :key="print.slug">
            <div class="space-y-4">
              <div class="relative">
                <NuxtLink :to="`3d/prints/${print.slug}`">
                  <nuxt-image
                    sets="300,300:600,600:900"
                    class="absolute object-cover h-full w-full shadow-lg rounded-lg"
                    :src="`+jpg-featured:/img/3d/prints/${print.slug}/featured.jpg`"
                    width="200"
                    height="200"
                  />
                </NuxtLink>
              </div>
            </div>
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
    const page = await $content(`${defaultLocale}/3d/index`).fetch()
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
    url('~assets/img/3d/hero.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
