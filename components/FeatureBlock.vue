<template>
  <div class="flex">
    <div class="flex-shrink-0">
      <div v-if="icon" class="flex items-center justify-center h-12 w-12">
        <div class="h-12 w-12 mt-10 pr-2">
          <img
            :src="require(`~/assets/fa/${icon.name}.svg`)"
            :alt="icon.name"
          />
        </div>
      </div>
    </div>
    <div class="ml-4">
      <h4
        class="mt-4 text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
      >
        {{ title }}
      </h4>
      <h5 class="text-lg leading-6 font-medium text-gray-900">
        {{ subTitle }}
      </h5>
      <p class="mt-2 text-base leading-6 text-gray-500">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureBlock',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: Object,
      required: false,
      default: () => ({
        name: null,
        color: null,
      }),
    },
  },
}
</script>
