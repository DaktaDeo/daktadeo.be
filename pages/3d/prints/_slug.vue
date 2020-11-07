<template>
  <div v-if="post" class="w-full max-w-screen-xl mx-auto">
    <div class="px-4 sm:px-6 lg:px-8 py5 md:py-4">
      <h1
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl mb-2"
      >
        {{ post.title }}
      </h1>

      <section v-if="post.print_categories" class="my-4 mb-12">
        <h2
          class="text-2xl leading-4 tracking-tight sm:text-3xl mb-4 font-extrabold"
        >
          Gerelateerde producten
        </h2>
        <ul class="flex space-x-2 flex-wrap">
          <li v-for="cat in post.print_categories" :key="cat" class="mt-1.5">
            <span
              class="whitespace-no-wrap inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 border text-gray-800"
            >
              {{ cat }}
            </span>
          </li>
        </ul>
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

      <section class="my-4 mb-12">
        <h2
          class="text-2xl leading-4 tracking-tight sm:text-3xl mb-6 font-extrabold"
        >
          Specificaties
        </h2>

        <div v-if="post.productProperties" class="my-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Product</h3>
          <div>
            <dl>
              <div
                v-for="(item, key) in post.productProperties"
                :key="key"
                class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  {{ item }}
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  {{ key }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div v-if="post.printProperties" class="my-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Product</h3>
          <div>
            <dl>
              <div
                v-for="(item, key) in post.printProperties"
                :key="key"
                class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  {{ key }}
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  {{ item }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
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
</template>

<script>
export default {
  name: 'DddPrint',
  async asyncData(context) {
    const { $content, params, app } = context
    const slug = params.slug
    const post = await $content(
      `${app.i18n.locale}/3d/prints/${slug}`,
      'index'
    ).fetch()

    return {
      post,
    }
  },
}
</script>
