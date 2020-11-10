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
    // script: [
    //   { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
    //   { src: '/xzoom.js' },
    //   { src: '/oldstuff.js' },
    // ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/filters.js', '~/plugins/vue-agile'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // https://medium.com/@jpoechill/access-your-nuxt-js-development-server-on-mobile-a4d67ac88bc6
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

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
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
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
      {
        name: 'jpg-thumbnail',
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 80,
          height: 80,
        },
      },
    ],
  },
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    vueI18n: {
      fallbackLocale: 'nl',
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
