import webpack from 'webpack'

const createSitemapRoutesPrints = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')

  let prints1 = []
  if (prints1.length === 0)
    prints1 = await $content('nl/3d/prints').only(['slug']).fetch()
  for (const post of prints1) {
    routes.push(`/3d/prints/${post.slug}`)
  }

  // let prints2 = []
  // if (prints2.length === 0)
  //   prints2 = await $content('en/3d/prints').only(['slug']).fetch()
  // for (const post of prints2) {
  //   routes.push(`/en/3d/prints/${post.slug}`)
  // }

  return routes
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaktaDeo.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules) --> sort order is important
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    // https://github.com/nuxt-community/modules/tree/master/packages/browserconfig
    '@nuxtjs/browserconfig',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/sitemap-module#dev
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  browserconfig: {
    TileColor: '#fff',
    square150x150logo: { '@': { src: 'icon.png' } },
  },

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
    handleImages: ['jpeg', 'jpg', 'png'],
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

  sitemap: [
    {
      hostname: 'https://daktadeo.be',
      gzip: true,
      i18n: true,
    },
    {
      hostname: 'https://daktadeo.be',
      path: '/sitemap-3d-prints.xml',
      routes: createSitemapRoutesPrints,
      gzip: true,
      i18n: false,
    },
  ],
}
