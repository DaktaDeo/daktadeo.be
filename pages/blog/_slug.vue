<template>
  <post :page="page" section="blog"></post>
</template>

<script>
import { AutoSEO } from '@/mixins'
import Post from '@/components/Post'

export default {
  components: { Post },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, app, params } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/blog/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
