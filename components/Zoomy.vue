<template>
  <div v-if="images" class="grid grid-cols-12 gap-2">
    <div class="col-span-1">
      <ul class="grid grid-cols-1 gap-1">
        <li
          v-for="image in images"
          :key="image.src"
          class="cursor-pointer"
          @click="changeActiveImage(image)"
        >
          <nuxt-image
            :src="`+jpg-thumbnail:${image.src}`"
            width="80"
            height="80"
            :alt="image.alt"
            class="absolute object-cover h-full w-full shadow-lg rounded-lg"
          />
        </li>
      </ul>
    </div>
    <div v-if="activeImage" class="col-span-10">
      <nuxt-image
        class="absolute object-cover h-full w-full shadow-lg rounded-lg"
        sets="300,300:600,600:900"
        :src="`+jpg-featured:${activeImage}`"
        width="640"
        height="480"
        :alt="activeImageAlt"
        responsive
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeImage: null,
      activeImageAlt: null,
    }
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
    this.activeImage = this.first.src
    this.activeImageAlt = this.first.alt
  },
  methods: {
    changeActiveImage(img) {
      this.activeImage = img.src
      this.activeImageAlt = img.alt
    },
  },
}
</script>
