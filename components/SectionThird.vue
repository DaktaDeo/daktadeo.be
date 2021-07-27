<template>
  <div class="relative">
    <div
      v-if="hasImage"
      class="h-56 sm:h-72 md:absolute md:h-full md:w-1/3"
      :class="{ 'md:right-0': !isEven, 'md:left-0': isEven }"
    >
      <nuxt-img
        class="w-full h-full object-cover"
        :src="image.src"
        :alt="image.alt"
        :lazy="false"
      ></nuxt-img>
    </div>

    <div
      class="
        relative
        max-w-screen-xl
        mx-auto
        px-4
        py-12
        sm:px-6
        lg:px-8 lg:py-16
      "
    >
      <div
        class="text-center md:text-left"
        :class="{
          'md:w-2/3': hasImage,
          'md:w-2/3 m-auto md:text-center my-4': !hasImage,
          'md:mr-auto md:pr-10': !isEven && hasImage,
          'md:ml-auto md:pl-10': isEven && hasImage,
        }"
      >
        <div v-if="heading.svg" :class="{ 'md:w-2/3 m-auto': !hasImage }">
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
        <div class="mt-3 text-3xl leading-snug" v-html="content"></div>
        <call-to-action-button
          v-if="cta.link"
          class="mt-8"
          :cta="cta"
        ></call-to-action-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionThird',
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
