<template>
  <div v-if="page" class="relative px-4 sm:px-6 lg:px-8 mt-8 py-8">
    <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-lg mx-auto">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
import { AutoSEO } from '@/mixins'

export default {
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const page = await $content(`${defaultLocale}/card`).fetch()

    return {
      page,
    }
  },
}
</script>
