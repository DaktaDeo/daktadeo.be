<template>
  <div v-if="home">
    <div class="relative bg-primary-color-dark hero" role="banner">
      <div class="max-h-full" :style="bgImage">
        <div class="max-w-screen-xl mx-auto pt-32 px-4 pb-8 sm:px-6 lg:px-8">
          <div class="text-center">
            <p
              class="mt-1 leading-10 text-gray-200 sm:leading-none sm:tracking-tight"
            >
              <span
                v-if="home.hero.title_1"
                class="text-2xl sm:text-3xl lg:text-4xl"
              >
                {{ home.hero.title_1 }}
              </span>
              <span
                v-if="home.hero.title_2"
                class="text-4xl sm:text-5xl lg:text-6xl"
              >
                <br />
                {{ home.hero.title_2 }}
              </span>
            </p>
            <div class="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-200">
              {{ home.hero.tagline }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-screen-xl mx-auto">
      <section v-if="hasFeatures" class="px-4 py5 md:py-4">
        <ul class="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-8">
          <li
            v-for="feature in home.features"
            :key="feature.id"
            class="mt-10 md:mt-0"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  v-if="feature.icon"
                  class="flex items-center justify-center h-12 w-12"
                >
                  <div class="h-12 w-12 mt-10 pr-2">
                    <img
                      :src="require(`~/assets/fa/${feature.icon.name}.svg`)"
                      :alt="feature.icon.name"
                    />
                  </div>
                </div>
              </div>
              <div class="ml-4">
                <h4
                  class="mt-4 text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                >
                  {{ feature.heading }}
                </h4>
                <h5 class="text-lg leading-6 font-medium text-gray-900">
                  {{ feature.tagline }}
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ feature.copy }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section v-if="prints" class="px-4 py8 md:py-16">
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
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          <li>
            <div class="space-y-4">
              <div class="relative pb-2/3">
                <a href="">
                  <img
                    class="absolute object-cover h-full w-full shadow-lg rounded-lg"
                    src="require(`img/featured.jpg`)"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="relative pb-2/3">
                <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0"></div>
                <div class="inline-flex rounded-md shadow">
                  <a
                    href="prints/"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-on-primary-color bg-primary-color hover:text-white hover:hover-bg-primary-color transition duration-150 ease-in-out"
                  >
                    Meer!
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ddd',
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const home = await $content(`${defaultLocale}/3d/index`).fetch()
    const prints = await $content(`${defaultLocale}/3d/prints`, { deep: true })
      .only(['path'])
      .fetch()

    return {
      prints: _.map(prints, (page) => ({
        ...page,
        path: _.replace(page.path, `/${defaultLocale}`, ''),
      })),
      home,
    }
  },
  computed: {
    hasFeatures() {
      return !_.isEmpty(this.home.features)
    },
    bgImage() {
      if (!_.isEmpty(this.home.hero.image)) {
        const img = this.home.hero.image
        return `background-image: linear-gradient(to right bottom, rgba(246, 246, 246, 0.25), rgb(48, 72, 75)), url('${img}');background-position: center center;background-repeat: no-repeat;background-size: cover`
      }
      return ''
    },
  },
}
</script>
