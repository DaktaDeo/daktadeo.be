<template>
  <header class="relative bg-primary-color-dark overflow-hidden">
    <div class="relative pt-6 pb-4">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <a
                href="/"
                aria-label="Home"
                class="h-8 w-auto sm:h-10 fill-light-silver fill-dot"
              >
                <Logo></Logo>
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  id="main-menu"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-haspopup="true"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10 pt-7">
            <nuxt-link
              v-for="link in navlinks"
              :key="link.identifier"
              class="font-medium text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out"
              :to="link.url"
              >{{ link.name }}</nuxt-link
            >
          </div>
          <div
            class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
          >
            <!-- <span class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-primary-color-dark  hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                Log in
              </a>
            </span> -->
          </div>
        </nav>
      </div>

      <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-primary-color-dark shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div class="h-8 w-auto fill-light-silver fill-dot">
                <Logo></Logo>
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <!--                <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</a>-->
              <!--            {{ range .Site.Menus.global }}-->
              <!--                <a href="{{.URL}}" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">{{ .Name }}</a>-->
              <!--            {{ end }}-->
            </div>
            <!-- <div>
              <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-primary-color-dark  hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
                Log in
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: { Logo },
  data() {
    return {
      links: [
        {
          name: 'Nieuwtjes',
          weight: 10,
          identifier: 'news',
          url: 'news',
        },
        {
          name: '.Academy',
          weight: 1,
          identifier: 'academy',
          url: 'academy',
        },
        {
          name: '.3D',
          weight: 3,
          identifier: '3d',
          url: '3d',
        },
        {
          name: '.Web',
          weight: 7,
          identifier: 'web',
          url: 'web',
        },
        {
          name: '.Multipass',
          weight: 5,
          identifier: 'multipass',
          url: 'multipass',
        },
      ],
    }
  },
  computed: {
    navlinks() {
      return _.sortBy(this.links, 'weight')
    },
  },
}
</script>
