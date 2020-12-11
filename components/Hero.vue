<template>
  <div class="bg-primary-color-dark hero" role="banner">
    <div
      class="max-w-2xl mx-auto pt-16 pb-4 px-4 sm:pt-26 sm:pb-6 sm:px-6 lg:px-8 lg:max-w-7xl md:pt-36"
    >
      <div class="px-0 sm:px-4 lg:px-0">
        <div class="text-center">
          <div
            class="mt-1 leading-10 text-gray-200 sm:leading-none sm:tracking-tight"
          >
            <div
              v-if="title"
              class="text-2xl sm:text-3xl lg:text-4xl"
              v-html="title"
            ></div>
            <div
              v-if="subTitle"
              class="text-4xl sm:text-5xl lg:text-6xl"
              v-html="subTitle"
            ></div>
          </div>
          <div
            class="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-200"
            v-html="tagLine"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    tagLine: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
<style>
.hero {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
