<template>
  <div v-if="images">
    <div class="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-1">
      <div class="space-y-5 sm:space-y-4">
        <div v-if="activeImage" class="max-w-md mx-auto">
          <client-only>
            <pinch-zoom>
              <nuxt-image
                sets="300,300:600,600:900"
                class="xzoom"
                :src="`+jpg-featured:${activeImage.src}`"
                width="200"
                height="200"
                :alt="activeImage.alt"
              />
            </pinch-zoom>
          </client-only>
        </div>
      </div>
      <div class="text-center space-y-auto"><div>zoom!</div></div>
      <div class="xzoom-thumbs col-span-2">
        <div class="justify-evenly flex bg-gray-200 p-4">
          <div v-for="image in images" :key="image.src">
            <nuxt-image
              sets="300,300:600,600:900"
              class="xzoom-gallery"
              :src="`+jpg-thumbnail:${image.src}`"
              width="80"
              height="80"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
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
