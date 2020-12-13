<template>
  <a
    target="_blank"
    :href="href"
    :class="`no-underline inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors}`"
  >
    <div v-if="icon.name" class="fill-current">
      <div class="h-10 w-10 pr-2">
        <img
          :src="require(`~/assets/fa/${icon.name}.svg`)"
          :alt="icon.name"
          style="margin: 0"
        />
      </div>
    </div>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    href: {
      type: String,
      required: true,
    },
    colors: {
      type: String,
      required: false,
      default:
        'text-white bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
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
