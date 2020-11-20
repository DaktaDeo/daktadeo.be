<template>
  <section v-if="hasItems">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="item.color_classes"
    >
      <section-partners
        v-if="item.type === 'partners'"
        :heading="item.heading"
        :content="item.content"
        :partners="item.partners"
      ></section-partners>
      <SectionCTA
        v-else
        :cta="item.cta"
        :heading="item.heading"
        :image="item.image"
        :content="item.content"
        :index="index"
      ></SectionCTA>
    </div>
  </section>
</template>

<script>
import SectionPartners from '@/components/SectionPartners'
import SectionCTA from '~/components/SectionCTA'

export default {
  components: { SectionPartners, SectionCTA },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    hasItems() {
      return !_.isEmpty(this.items)
    },
  },
}
</script>
