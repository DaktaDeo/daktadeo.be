<template>
  <div class="relative">
    <div class="max-w">
      <div class="relative sm:overflow-hidden">
        <div v-if="hasImage" class="absolute inset-0">
          <nuxt-img
            class="h-full w-full object-cover"
            :src="image.src"
            :alt="image.alt"
            :lazy="false"
          ></nuxt-img>
        </div>

        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div v-if="heading.svg">
            <div :class="heading.svg.class">
              <div v-html="require(`~/assets/${heading.svg.src}.svg?raw`)" />
            </div>
          </div>

          <div
            v-if="heading.title"
            class="
              text-base
              leading-6
              font-semibold
              uppercase
              tracking-wider
              marcellus
            "
          >
            {{ heading.title }}
          </div>
          <h2
            v-if="heading.subtitle"
            :class="`mt-2 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 ${heading.class}`"
          >
            {{ heading.subtitle }}
          </h2>

          <p class="mt-6 max-w-lg text-xl sm:max-w-3xl" v-html="content"></p>
          <div class="mt-10 max-w-sm sm:max-w-none sm:flex">
            <div
              class="
                space-y-4
                sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5
              "
            >
              <call-to-action-button
                v-if="cta.link"
                :cta="cta"
              ></call-to-action-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionFull',
  props: {
    heading: {
      type: Object,
      required: false,
      default: () => ({
        class: null,
        title: null,
        subtitle: null,
        image: {
          alt: null,
          src: null,
          class: null,
        },
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
        color_classes: null,
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
