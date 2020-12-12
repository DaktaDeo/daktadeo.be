<template>
  <div v-if="images" class="grid grid-cols-12 gap-2">
    <div class="col-span-1">
      <ul class="grid grid-cols-1 gap-1">
        <li
          v-for="(image, $index) in images"
          :key="image.src"
          class="cursor-pointer"
          @click="activeIndex = $index"
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
    <div class="col-span-10">
      <div v-for="(image, $index) in images" :key="image.src">
        <nuxt-image
          v-show="$index === activeIndex"
          class="absolute object-cover h-full w-full shadow-lg rounded-lg"
          sets="300,300:600,600:900"
          :src="`+jpg-featured:${image.src}`"
          width="640"
          height="480"
          :alt="image.alt"
          responsive
        />
      </div>
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
      activeIndex: 0,
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
