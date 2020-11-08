<template>
  <client-only>
    <div v-if="images">
      <div class="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-1">
        <div class="space-y-5 sm:space-y-4">
          <div v-if="activeImage" class="max-w-md mx-auto">
            <nuxt-image
              sets="300,300:600,600:900"
              :src="`+jpg-featured:${activeImage.src}`"
              width="200"
              height="200"
              :alt="activeImage.alt"
            />
          </div>
        </div>
      </div>
      <div class="text-center space-y-auto"><div>zoom!</div></div>
      <div class="col-span-2">
        <div class="justify-evenly flex bg-gray-200 p-4">
          <div v-for="image in images" :key="image.src">
            <a :href="image.src" @click.prevent="activeImage = image">
              <nuxt-image
                sets="300,300:600,600:900"
                :src="`+jpg-thumbnail:${image.src}`"
                width="80"
                height="80"
                :alt="image.alt"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'Zoomy',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { activeImage: this.first }
  },
  computed: {
    items() {
      return _.sortBy(this.images, 'weight')
    },
    first() {
      return _.head(this.items)
    },
  },
  mounted() {
    this.activeImage = this.first
  },
}
</script>
