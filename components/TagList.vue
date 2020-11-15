<template>
  <ul :class="ulClass">
    <li v-for="tag in items" :key="tag" class="mt-1.5">
      <span :class="tagClass">
        {{ tag }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    ulClass: {
      type: String,
      required: false,
      default: 'flex space-x-2 flex-wrap',
    },
    tagClass: {
      type: String,
      required: false,
      default:
        'whitespace-no-wrap inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 border text-gray-800',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    hasItems() {
      return !_.isEmpty(this.items)
    },
  },
}
</script>
