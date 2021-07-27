<template>
  <div v-if="post">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="px-4 sm:px-6 lg:px-8 py5 md:py-4">
        <h1
          class="
            text-3xl
            leading-9
            font-extrabold
            tracking-tight
            sm:text-4xl
            mb-2
          "
        >
          {{ post.title }}
        </h1>
        <tag-list :items="post.print_categories" class="my-4 mb-12"></tag-list>

        <section v-if="images" class="my-4 mb-12">
          <Zoomy :images="images"></Zoomy>
        </section>

        <section v-if="hasContent" class="my-4 mb-12">
          <h2
            class="
              text-2xl
              leading-4
              tracking-tight
              sm:text-3xl
              mb-6
              font-extrabold
            "
          >
            Productinformatie
          </h2>
          <h3
            class="
              text-1xl
              leading-4
              tracking-tight
              sm:text-2xl
              mb-2
              font-extrabold
            "
          >
            Omschrijving
          </h3>
          <div class="markdown my-4">
            <nuxt-content :document="post" />
          </div>
        </section>

        <section v-if="hasSpecs" class="my-4 mb-12">
          <h2
            class="
              text-2xl
              leading-4
              tracking-tight
              sm:text-3xl
              mb-6
              font-extrabold
            "
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

        <last-update :date="post.updatedAt"></last-update>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyDefinitionList from '@/components/PropertyDefinitionList'
import TagList from '@/components/TagList'
import LastUpdate from '@/components/LastUpdate'
import Zoomy from '@/components/Zoomy'
import { AutoSEO } from '@/mixins'

export default {
  components: {
    LastUpdate,
    TagList,
    PropertyDefinitionList,
    Zoomy,
  },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, params, app } = context
    const { slug } = params
    const post = await $content(`${app.i18n.locale}/3d/prints`, slug).fetch()

    if (_.isNil(post.meta)) post.meta = {}
    post.meta = {
      ...{
        locale: app.i18n.locale,
        title: post.title,
        description: post.description,
      },
    }

    const images = _.map(post.images, (image) => {
      return {
        ...image,
        src: `/img/3d/prints/${post.slug}/${image.src}`,
      }
    })

    return {
      post,
      images,
    }
  },
  computed: {
    hasContent() {
      return !_.isEmpty(this.post.body.children)
    },
    hasSpecs() {
      return !_.isEmpty(this.post.specs)
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
