<template>
  <div v-if="images" class="grid grid-cols-12 gap-2">
    <div class="hidden md:block md:col-span-1">
      <ul class="grid grid-cols-1 gap-1">
        <li
          v-for="(image, $index) in images"
          :key="image.src"
          class="cursor-pointer"
          @click="$refs.carousel.goTo($index)"
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
    <div class="col-span-12 md:col-span-10">
      <agile ref="carousel" :options="agileOptions">
        <div v-for="image in images" :key="image.src" class="slide">
          <nuxt-image
            class="absolute object-cover h-full w-full shadow-lg rounded-lg"
            sets="300,300:600,600:900"
            :src="`+jpg-featured:${image.src}`"
            width="640"
            height="480"
            :alt="image.alt"
            responsive
          />
        </div>
      </agile>
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
      agileOptions: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false,
            },
          },
        ],
      },
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
<style lang="sass">
.agile
  &__actions
    margin-top: 20px
  &__nav-button
    background: transparent
    border: none
    color: #ccc
    cursor: pointer
    font-size: 24px
    transition-duration: .3s
    &:hover
      color: #888
  &__dot
    margin: 0 10px
    &button
      background-color: #eee
      border: none
      border-radius: 50%
      cursor: pointer
      display: block
      height: 10px
      font-size: 0
      line-height: 0
      margin: 0
      padding: 0
      transition-duration: .3s
      width: 10px
    &--current,
    &:hover button
      background-color: #888
// Slides styles
.slide
  //height: 400px
  //align-items: center
  //color: #fff
  //display: flex
  //justify-content: center
  //padding: 40px
  &h3
    font-size: 32px
    font-weight: 300
// Slides backgrounds
$colors: #f1c40f #e67e22 rgb(231, 76, 60) rgb(155, 89, 182) rgb(52, 152, 219) rgb(46, 204, 113)
@for $i from 1 through length($colors)
  $color: nth($colors, $i)
  .slide--#{$i}
    background-color: $color
</style>
