<template>
  <section v-if="hasItems" :class="classes">
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
      <SectionFull
        v-else-if="item.type === 'full'"
        :cta="item.cta"
        :heading="item.heading"
        :image="item.image"
        :content="item.content"
        :index="index"
      ></SectionFull>
      <SectionThird
        v-else-if="item.type === 'third'"
        :cta="item.cta"
        :heading="item.heading"
        :image="item.image"
        :content="item.content"
        :index="index"
      ></SectionThird>
      <section-team
        v-else-if="item.type === 'team'"
        :members="item.members"
        :heading="item.heading"
        :content="item.content"
        :index="index"
      >
      </section-team>
      <section-news
        v-else-if="item.type === 'news'"
        :heading="item.heading"
        :content="item.content"
        :items="articles"
        :index="index"
      >
      </section-news>
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
import SectionCTA from '@/components/SectionCTA'
import SectionFull from '@/components/SectionFull'
import SectionThird from '@/components/SectionThird'
import SectionTeam from '@/components/SectionTeam'
import SectionNews from '@/components/SectionNews'

export default {
  components: {
    SectionNews,
    SectionTeam,
    SectionPartners,
    SectionCTA,
    SectionFull,
    SectionThird,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    articles: {
      type: Array,
      required: false,
      default: () => [],
    },
    classes: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    hasItems() {
      return !_.isEmpty(this.items)
    },
  },
}
</script>
