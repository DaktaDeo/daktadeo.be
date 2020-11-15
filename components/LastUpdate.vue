<template>
  <div v-if="hasDate" class="leading-6 text-gray-500 text-sm">
    Laatste aanpassing:
    <time :datetime="date">
      {{ date | formatDateTimeLong }}
    </time>
  </div>
</template>

<script>
export default {
  name: 'LastUpdate',
  props: {
    date: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
  computed: {
    hasDate() {
      return !_.isEmpty(this.date)
    },
  },
}
</script>
