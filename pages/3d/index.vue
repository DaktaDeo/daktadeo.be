<template>
  <div v-if="page">
    <Hero
      :title="page.hero.title_1"
      :sub-title="page.hero.title_2"
      :tag-line="page.hero.tagline"
    ></Hero>

    <Features :items="features"></Features>
    <section v-if="prints" class="px-4 py8 md:py-16 pt-4">
      <div
        class="
          space-y-5
          sm:space-y-4
          md:max-w-xl
          lg:max-w-3xl
          xl:max-w-none
          pb-4
        "
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
        class="
          space-y-12
          sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
          lg:grid-cols-5 lg:gap-x-8
        "
      >
        <li v-for="print in prints" :key="print.slug">
          <div class="space-y-4">
            <div class="relative">
              <nuxt-link :to="`/3d/prints/${print.slug}`">
                <nuxt-img
                  sets="300,300:600,600:900"
                  class="
                    absolute
                    object-cover
                    h-full
                    w-full
                    shadow-lg
                    rounded-lg
                  "
                  :src="`+jpg-featured:/img/3d/prints/${print.slug}/featured.jpg`"
                  width="200"
                  height="200"
                />
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </section>
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
    const page = await $content(`${defaultLocale}/3d/index`).fetch()
    const prints = await $content(`${defaultLocale}/3d/prints`, { deep: true })
      .without(['body'])
      .where({ type: 'prints' })
      .fetch()

    return {
      // eslint-disable-next-line no-shadow
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
    url('~assets/img/3d/hero.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
