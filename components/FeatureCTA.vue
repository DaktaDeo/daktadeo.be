<template>
  <div class="relative">
    <div v-if="hasImage">
      <div
        class="h-56 bg-indigo-600 sm:h-72 md:absolute md:h-full md:w-1/2"
        :class="{ 'md:right-0': !isEven, 'md:left-0': isEven }"
      >
        <img
          class="w-full h-full object-cover"
          :src="image.src"
          :alt="image.alt"
        />
      </div>

      <div
        class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div
          class="md:w-1/2"
          :class="{
            'md:mr-auto md:pr-10': !isEven,
            'md:ml-auto md:pl-10': isEven,
          }"
        >
          <div :class="heading.class">
            {{ heading.image }}
          </div>
          <div
            v-if="heading.text"
            class="text-base leading-6 font-semibold uppercase tracking-wider"
          >
            {{ heading.title }}
          </div>
          <h2
            v-if="heading.subtitle"
            class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
          >
            {{ heading.subtitle }}
          </h2>
          <p class="mt-3 text-lg leading-7 markdown">
            {{ content }}
          </p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                :href="cta.link"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-on-primary-color bg-primary-color hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                {{ cta.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCTA',
  props: {
    heading: {
      type: Object,
      required: false,
      default: () => ({
        class: null,
        title: null,
        subtitle: null,
        image: null,
      }),
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    cta: {
      type: Object,
      required: false,
      default: () => ({
        link: null,
        text: null,
      }),
    },
    image: {
      type: Object,
      required: false,
      default: () => ({
        alt: null,
        src: null,
      }),
    },
    icon: {
      type: Object,
      required: false,
      default: () => ({
        name: null,
        color: null,
      }),
    },
    index: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  computed: {
    hasImage() {
      return !_.isEmpty(this.image.src)
    },
    isEven() {
      return this.index % 2 === 0
    },
  },
}
</script>
