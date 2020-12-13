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
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    hasDate() {
      return !_.isEmpty(this.date)
    },
  },
}
</script>
