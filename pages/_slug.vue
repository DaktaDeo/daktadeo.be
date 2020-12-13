<template>
  <post :page="page"></post>
</template>

<script>
import { AutoSEO } from '@/mixins'
import Post from '~/components/Post'
export default {
  components: { Post },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, app, params } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
