<template>
  <div v-if="hasItems" :class="parentClasses">
    <section class="px-4 py5 md:py-4">
      <ul class="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-8">
        <li v-for="item in items" :key="item.id" class="mt-10 md:mt-0">
          <feature-block
            :sub-title="item.tagline"
            :title="item.heading"
            :content="item.copy"
            :icon="item.icon"
          ></feature-block>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import FeatureBlock from '@/components/FeatureBlock'

export default {
  components: { FeatureBlock },
  props: {
    items: {
      type: Array,
      required: true,
    },
    parentClasses: {
      type: String,
      required: false,
      default: 'w-full max-w-screen-xl mx-auto',
    },
  },
  computed: {
    hasItems() {
      return !_.isEmpty(this.items)
    },
  },
}
</script>
