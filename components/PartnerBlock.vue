<template>
  <div class="flex">
    <div class="flex-shrink-0">
      <div class="ml-4">
        <h4
          class="
            mt-4
            text-2xl
            leading-8
            font-extrabold
            text-gray-900
            tracking-tight
            sm:text-3xl sm:leading-9
          "
        >
          {{ name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerBlock',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    address: {
      type: String,
      required: false,
      default: '',
    },
    maps: {
      type: String,
      required: false,
      default: '',
    },
    website: {
      type: String,
      required: false,
      default: '',
    },
    categories: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
