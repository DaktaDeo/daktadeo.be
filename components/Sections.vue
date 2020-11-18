<template>
  <section v-if="hasItems">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="item.color_classes"
    >
      <SectionCTA
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
import SectionCTA from '~/components/SectionCTA'

export default {
  components: { SectionCTA },
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
