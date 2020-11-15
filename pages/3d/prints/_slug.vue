<template>
  <div v-if="post">
    <Breadcrumbs :crumbs="crumbs"></Breadcrumbs>
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="px-4 sm:px-6 lg:px-8 py5 md:py-4">
        <h1
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl mb-2"
        >
          {{ post.title }}
        </h1>

        <section v-if="$device.isMobile">
          <client-only>
            <Carousel :images="gallery"></Carousel>
          </client-only>
        </section>

        <section v-else class="my-4 mb-12 flex">
          <Zoomy :images="gallery"></Zoomy>
        </section>

        <section v-if="post.print_categories" class="my-4 mb-12">
          <h2
            class="text-2xl leading-4 tracking-tight sm:text-3xl mb-4 font-extrabold"
          >
            Gerelateerde producten
          </h2>
          <tag-list :items="post.print_categories"></tag-list>
        </section>

        <section v-if="post.body" class="my-4 mb-12">
          <h2
            class="text-2xl leading-4 tracking-tight sm:text-3xl mb-6 font-extrabold"
          >
            Productinformatie
          </h2>
          <h3
            class="text-1xl leading-4 tracking-tight sm:text-2xl mb-2 font-extrabold"
          >
            Omschrijving
          </h3>
          <div class="markdown">
            <nuxt-content :document="post" />
          </div>
        </section>

        <section v-if="hasSpecs" class="my-4 mb-12">
          <h2
            class="text-2xl leading-4 tracking-tight sm:text-3xl mb-6 font-extrabold"
          >
            Specificaties
          </h2>

          <property-definition-list
            :properties="post.specs.product"
            title="Product"
            class="my-4"
          ></property-definition-list>

          <property-definition-list
            :properties="post.specs.print"
            title="Print"
            class="my-4"
          ></property-definition-list>
        </section>

        <section>
          <div class="leading-6 text-gray-500 text-sm">
            Laatste aanpassing:
            <time :datetime="post.updatedAt">
              {{ post.updatedAt | formatDateTimeLong }}
            </time>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyDefinitionList from '@/components/PropertyDefinitionList'
import TagList from '@/components/TagList'
import Breadcrumbs from '~/components/Breadcrumbs'
import Zoomy from '~/components/Zoomy'
import { AutoSEO } from '~/mixins'

import Carousel from '~/components/Carousel'
export default {
  name: 'DddPrint',
  components: { TagList, PropertyDefinitionList, Zoomy, Breadcrumbs, Carousel },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, params, app } = context
    const slug = params.slug
    const post = await $content(`${app.i18n.locale}/3d/prints`, slug).fetch()

    if (_.isNil(post.meta)) post.meta = {}
    post.meta = {
      ...{
        locale: app.i18n.locale,
        title: post.title,
        description: post.description,
      },
    }

    return {
      post,
    }
  },
  computed: {
    hasSpecs() {
      return !_.isEmpty(this.post.specs)
    },
    baseForImages() {
      return `/img/3d/prints/${this.post.slug}`
    },
    gallery() {
      return _.map(this.post.images, (image) => {
        return {
          ...image,
          src: `${this.baseForImages}/${image.src}`,
        }
      })
    },
    crumbs() {
      return [
        {
          identifier: '3d',
          name: '3D',
          url: `/3d`,
        },
        {
          identifier: 'prints',
          name: 'prints',
        },
        {
          identifier: this.post.slug,
          name: this.post.title,
          url: `/3d/prints/${this.post.slug}`,
        },
      ]
    },
  },
}
</script>
