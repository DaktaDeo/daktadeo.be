<template>
  <div
    v-if="hasArticles"
    class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          v-if="heading.title"
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          {{ heading.title }}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ content }}
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="item in articles"
          :key="item.path"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              v-if="item.image"
              class="h-48 w-full object-cover"
              :src="item.image.src"
              :alt="item.image.alt"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p
                v-if="item.subtitle"
                class="text-sm font-medium text-indigo-600"
              >
                {{ item.subtitle }}
              </p>
              <p class="text-xl font-semibold text-gray-900">
                {{ item.title }}
              </p>
              <nuxt-content :document="item" />
            </div>
            <div class="mt-6 flex items-center">
              <div class="text-sm text-gray-500">
                <time :datetime="item.date">
                  {{ item.date | formatDateTimeLong }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionNews',
  props: {
    heading: {
      type: Object,
      required: false,
      default: () => ({
        class: null,
        title: null,
        subtitle: null,
      }),
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    hasArticles() {
      return !_.isEmpty(this.items)
    },
    articles() {
      return _.sortBy(this.items, 'weight')
    },
  },
}
</script>
