import webpack from 'webpack'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaktaDeo.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/filters.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-optimized-images/
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
  },
  optimizedImages: {
    optimizeImages: true,
  },
  image: {
    presets: [
      {
        name: 'avatar',
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50,
        },
      },
      {
        name: 'jpg-cover',
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 300,
          height: 300,
        },
      },
      {
        name: 'jpg-featured',
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 1024,
          height: 1024,
        },
      },
    ],
  },
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        nl: {
          welcome: 'Welkom',
        },
        en: {
          welcome: 'Welcome',
        },
      },
      noPrefixDefaultLocale: true,
    },
  },
}
