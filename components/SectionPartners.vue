<template>
  <section class="px-4 py8 md:py-16 pt-4">
    <div
      class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none pb-4"
    >
      <h2
        v-if="heading.title"
        class="text-2xl leading-9 font-extrabold tracking-tight sm:text-3xl"
      >
        {{ heading.title }}
      </h2>
      <h3
        v-if="heading.subtitle"
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl"
      >
        {{ heading.subtitle }}
      </h3>
      <p class="text-xl leading-7 text-gray-500">
        {{ content }}
      </p>
    </div>
    <partner-block
      v-for="partner in partners"
      :key="partner.name"
      :name="partner.name"
    ></partner-block>
  </section>
</template>

<script>
import PartnerBlock from '@/components/PartnerBlock'

export default {
  name: 'SectionPartners',
  components: { PartnerBlock },
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
    partners: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
