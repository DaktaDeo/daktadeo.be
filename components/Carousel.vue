<template>
  <agile :options="myOptions">
    <div v-for="image in images" :key="image.src" class="slide">
      <nuxt-image
        sets="300,300:600,600:900"
        :src="`+jpg-featured:${image.src}`"
        width="375"
        height="375"
        :alt="image.alt"
      />
    </div>
  </agile>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      myOptions: {
        navButtons: false,

        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
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
    button
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
    &:hover
      button
        background-color: #888
// Slides styles
.slide
  height: 400px
  align-items: center
  color: #fff
  display: flex
  justify-content: center
  //padding: 40px
  h3
    font-size: 32px
    font-weight: 300
// Slides backgrounds
$colors: #f1c40f #e67e22 rgb(231, 76, 60) rgb(155, 89, 182) rgb(52, 152, 219) rgb(46, 204, 113)
@for $i from 1 through length($colors)
  $color: nth($colors, $i)
  .slide--#{$i}
    background-color: $color
</style>
