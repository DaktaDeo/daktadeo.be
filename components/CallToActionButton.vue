<template>
  <div>
    <div class="inline-flex rounded-md shadow">
      <a
        v-if="isExternalLink(cta)"
        :href="cta.link"
        :class="cta.color_classes"
        target="_blank"
        class="
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          leading-6
          font-medium
          rounded-md
          text-on-primary-color
          bg-primary-color
          hover:text-white
          focus:outline-none focus:shadow-outline
          transition
          duration-150
          ease-in-out
        "
        v-html="cta.text"
      ></a>
      <nuxt-link
        v-else-if="cta.link"
        :to="cta.link"
        :class="cta.color_classes"
        class="
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          leading-6
          font-medium
          rounded-md
          text-on-primary-color
          bg-primary-color
          hover:text-white
          focus:outline-none focus:shadow-outline
          transition
          duration-150
          ease-in-out
        "
        v-html="cta.text"
      >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallToActionButton',
  props: {
    cta: {
      type: Object,
      required: false,
      default: () => ({
        link: null,
        text: null,
        color_classes: null,
      }),
    },
  },
  methods: {
    isExternalLink(cta) {
      if (_.isEmpty(cta.link)) return false
      return _.startsWith(cta.link, 'http')
    },
  },
}
</script>
