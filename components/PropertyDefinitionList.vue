<template>
  <div v-if="hasProperties" class="my-4">
    <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
    <div>
      <dl>
        <div
          v-for="(item, key) in properties"
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
</template>

<script>
export default {
  name: 'PropertyDefinitionList',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    properties: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
  computed: {
    hasProperties() {
      return !_.isEmpty(this.properties)
    },
  },
}
</script>
