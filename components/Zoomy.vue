<template>
  <client-only>
    <div v-if="images">
      <div v-if="$device.isMobile"></div>
      <div v-else class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <ul class="grid grid-cols-2">
            <li v-for="image in images" :key="image.src">
              <a :href="image.src" @click.prevent="activeImage = image">
                <nuxt-image
                  sets="300,300:600,600:900"
                  :src="`+jpg-thumbnail:${image.src}`"
                  width="80"
                  height="80"
                  :alt="image.alt"
                />
              </a>
            </li>
          </ul>
        </div>
        <div v-if="activeImage" class="max-w-md mx-auto col-span-2">
          <nuxt-image
            sets="400,400:640,640:900"
            :src="`+jpg-featured:${activeImage.src}`"
            width="400"
            height="400"
            :alt="activeImage.alt"
          />
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
