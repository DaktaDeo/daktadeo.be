<template>
  <div v-if="images" class="flex">
    <div class="mr-2 flex-grow-0">
      <ul class="grid grid-cols-1 xl:grid-cols-2 gap-2">
        <li v-for="image in images" :key="image.src">
          <a :href="image.src" @click.prevent="activeImage = image">
            <nuxt-image
              :src="`+jpg-thumbnail:${image.src}`"
              width="80"
              height="80"
              :alt="image.alt"
            />
          </a>
        </li>
      </ul>
    </div>
    <div v-if="activeImage" class="flex-grow">
      <nuxt-image
        class="mx-auto"
        sets="300,300:600,600:900"
        :src="`+jpg-featured:${activeImage.src}`"
        width="640"
        height="480"
        :alt="activeImage.alt"
        responsive
      />
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
