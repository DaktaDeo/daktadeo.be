<template>
  <div class="relative bg-primary-color-dark hero" role="banner">
    <div class="max-h-full hero">
      <div class="max-w-screen-xl mx-auto pt-1/5 px-4 pb-8 sm:px-6 lg:px-8">
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
