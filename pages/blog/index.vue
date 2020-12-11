<template>
  <post-list-index
    :posts="list"
    :page="page"
    read-more-text="Read this post →"
  ></post-list-index>
</template>

<script>
import PostListIndex from '@/components/PostListIndex'
import { AutoSEO } from '@/mixins'
export default {
  components: { PostListIndex },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/blog/index`).fetch()
    const list = await $content(`${defaultLocale}/blog`)
      .where({ slug: { $ne: 'index' } })
      .without(['body'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      page,
      list,
    }
  },
}
</script>
