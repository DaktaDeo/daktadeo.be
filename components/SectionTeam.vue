<template>
  <div>
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 sm:space-y-4">
          <h2
            v-if="heading.title"
            class="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            {{ heading.title }}
          </h2>
          <p class="text-xl text-gray-500">{{ content }}</p>
        </div>
        <div class="lg:col-span-2 md:mt-9">
          <ul
            class="
              space-y-12
              sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0
              lg:gap-x-8
            "
          >
            <li v-for="human in humans" :key="human.id">
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img
                  v-if="human.image"
                  class="w-32 h-32 lg:w-44 lg:h-44 object-cover"
                  :src="human.image.src"
                  :alt="human.image.alt"
                />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>{{ human.name }}</h3>
                  <p class="text-indigo-600">{{ human.function }}</p>
                  <p class="text-sm" v-html="human.blurb"></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTeam',
  props: {
    heading: {
      type: Object,
      required: false,
      default: () => ({
        class: null,
        title: null,
        subtitle: null,
      }),
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    members: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    humans() {
      return _.sortBy(this.members, 'weight')
    },
  },
}
</script>
