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

  // https://stackoverflow.com/questions/58205391/nuxtjs-use-asyncdata-method-in-layout-or-component
  fetchOnServer: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaktaDeo.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/markdown.js',
    '~plugins/filters.js',
    '~plugins/vue-scrollactive.js',
    '~/plugins/vue-agile',
  ],

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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-25132847-1',
      },
    ],
  ],

  // multipass -> {"csrfToken":"1uhih34B2sxUxObGX2gtFcFXfniMcriuFmuZrFuP","env":"production","userId":null}
  // Modules (https://go.nuxtjs.dev/config-modules) --> sort order is important
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
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

  router: {
    prefetchPayloads: true,
    prefetchLinks: true,
    trailingSlash: undefined,
  },

  browserconfig: {
    TileColor: '#fff',
    square150x150logo: { '@': { src: 'apple-touch-icon.png' } },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
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
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'jpg', 'png'],
  },

  image: {
    sizes: [320, 420, 768, 1024, 1200],
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
          width: 320,
          height: 240,
        },
      },
      {
        name: 'jpg-featured',
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 1200,
          height: 1200,
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
    strategy: 'prefix_except_default',
    seo: false,
    locales: [
      // {
      //   code: 'en',
      //   iso: 'en-US',
      // },
      {
        code: 'nl',
        iso: 'nl-BE',
        isCatchallLocale: true,
      },
    ],
    defaultLocale: 'nl',
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
