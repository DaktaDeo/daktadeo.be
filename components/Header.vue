<template>
  <div class="relative bg-primary-color-dark">
    <div
      class="
        flex
        justify-between
        items-center
        px-4
        py-6
        sm:px-6
        md:justify-start md:space-x-10
        max-w-screen-xl
        mx-auto
      "
    >
      <div class="lg:w-0 lg:flex-1">
        <nuxt-link
          to="/"
          aria-label="Home"
          class="h-8 w-auto sm:h-10 fill-light-silver fill-dot"
        >
          <span v-html="require(`~/assets/logos/daktadeo.svg?raw`)" />
        </nuxt-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          class="
            inline-flex
            items-center
            justify-center
            p-2
            rounded-md
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none focus:bg-gray-100 focus:text-gray-500
            transition
            duration-150
            ease-in-out
          "
          @click.prevent="isMobile = true"
        >
          <!-- Heroicon name: menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
      <nav class="hidden md:flex space-x-10">
        <div v-for="item in navlinks" :key="item.id">
          <div v-if="item.children">
            <div class="relative">
              <button
                type="button"
                class="
                  group
                  text-gray-500
                  inline-flex
                  items-center
                  space-x-2
                  text-base
                  leading-6
                  font-medium
                  hover:text-gray-100
                  focus:outline-none focus:text-gray-100
                  transition
                  ease-in-out
                  duration-150
                "
                @click.prevent="changeMenu(item)"
              >
                <span>{{ item.name }}</span>
                <svg
                  class="
                    text-gray-400
                    h-5
                    w-5
                    group-hover:text-gray-500
                    group-focus:text-gray-500
                    transition
                    ease-in-out
                    duration-150
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div v-if="activeItem === item.id">
                <div
                  v-if="item.type === 'two-col'"
                  class="
                    absolute
                    -ml-4
                    mt-3
                    transform
                    w-screen
                    max-w-md
                    md:max-w-3xl
                    lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
                    z-50
                  "
                >
                  <div class="rounded-lg shadow-lg">
                    <div class="rounded-lg shadow-xs overflow-hidden">
                      <div
                        class="
                          z-20
                          relative
                          grid
                          gap-6
                          bg-white
                          px-5
                          py-6
                          sm:gap-8 sm:p-8
                          lg:grid-cols-2
                        "
                      >
                        <nuxt-link
                          v-for="subitem in item.children"
                          :key="subitem.id"
                          :to="subitem.to"
                          class="
                            -m-3
                            p-3
                            flex
                            items-start
                            space-x-4
                            rounded-lg
                            hover:bg-gray-50
                            transition
                            ease-in-out
                            duration-150
                          "
                        >
                          <div
                            class="
                              flex-shrink-0 flex
                              items-center
                              justify-center
                              h-10
                              w-10
                              rounded-md
                              bg-indigo-500
                              text-white
                              sm:h-12 sm:w-12
                            "
                          >
                            <!-- Heroicon name: chart-bar -->
                            <svg
                              class="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <div class="space-y-1">
                            <p
                              class="
                                text-base
                                leading-6
                                font-medium
                                text-gray-900
                              "
                            >
                              {{ subitem.name }}
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              {{ subitem.blurb }}
                            </p>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <!--
   'More' flyout menu, show/hide based on flyout menu state.

   Entering: "transition ease-out duration-200"
     From: "opacity-0 translate-y-1"
     To: "opacity-100 translate-y-0"
   Leaving: "transition ease-in duration-150"
     From: "opacity-100 translate-y-0"
     To: "opacity-0 translate-y-1"
 -->
                  <div
                    class="
                      absolute
                      left-1/2
                      transform
                      -translate-x-1/2
                      mt-3
                      px-2
                      w-screen
                      max-w-xs
                      sm:px-0
                      z-50
                    "
                  >
                    <div class="rounded-lg shadow-lg">
                      <div class="rounded-lg shadow-xs overflow-hidden">
                        <div
                          class="
                            z-20
                            relative
                            grid
                            gap-6
                            bg-white
                            px-5
                            py-6
                            sm:gap-8 sm:p-8
                          "
                        >
                          <nuxt-link
                            v-for="subitem in item.children"
                            :key="subitem.id"
                            :to="subitem.to"
                            class="
                              -m-3
                              p-3
                              block
                              space-y-1
                              rounded-md
                              hover:bg-gray-50
                              transition
                              ease-in-out
                              duration-150
                            "
                          >
                            <p
                              class="
                                text-base
                                leading-6
                                font-medium
                                text-gray-900
                              "
                            >
                              {{ subitem.name }}
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              {{ subitem.blurb }}
                            </p>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <nuxt-link
              v-if="item.to"
              :to="item.to"
              class="
                text-base
                leading-6
                font-medium
                text-gray-500
                hover:text-gray-100
                focus:outline-none focus:text-gray-100
                transition
                ease-in-out
                duration-150
              "
            >
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </nav>
      <div
        class="
          hidden
          md:flex
          items-center
          justify-end
          space-x-8
          md:flex-1
          lg:w-0
        "
      >
        <!--        <a-->
        <!--          href="#"-->
        <!--          class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"-->
        <!--        >-->
        <!--          Sign in-->
        <!--        </a>-->
        <!--        <span class="inline-flex rounded-md shadow-sm">-->
        <!--          <a-->
        <!--            href="#"-->
        <!--            class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"-->
        <!--          >-->
        <!--            Sign up-->
        <!--          </a>-->
        <!--        </span>-->
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
      v-if="isMobile"
      class="
        absolute
        top-0
        inset-x-0
        p-2
        transition
        transform
        origin-top-right
        md:hidden
        z-50
      "
    >
      <div class="rounded-lg shadow-lg">
        <div
          class="
            rounded-lg
            shadow-xs
            bg-primary-color-dark
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div
                class="h-8 w-auto fill-light-silver fill-dot"
                v-html="require(`~/assets/logos/daktadeo.svg?raw`)"
              ></div>

              <div class="-mr-2">
                <button
                  type="button"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-md
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none focus:bg-gray-100 focus:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  @click.prevent="isMobile = false"
                >
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            <div>
              <nav class="grid grid-cols-1 gap-7">
                <div v-for="item in navlinksMobile" :key="item.id">
                  <nuxt-link
                    v-if="item.to"
                    :to="item.to"
                    class="text-base leading-6 font-medium text-gray-400"
                  >
                    {{ item.name }}
                  </nuxt-link>
                </div>
              </nav>
            </div>
          </div>
          <!--          <div class="py-6 px-5 space-y-6">-->
          <!--            <div class="space-y-6">-->
          <!--              <span class="w-full flex rounded-md shadow-sm">-->
          <!--                <a-->
          <!--                  href="#"-->
          <!--                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"-->
          <!--                >-->
          <!--                  Sign up-->
          <!--                </a>-->
          <!--              </span>-->
          <!--              <p-->
          <!--                class="text-center text-base leading-6 font-medium text-gray-500"-->
          <!--              >-->
          <!--                Existing customer?-->
          <!--                <a-->
          <!--                  href="#"-->
          <!--                  class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"-->
          <!--                >-->
          <!--                  Sign in-->
          <!--                </a>-->
          <!--              </p>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      required: false,
      default: () => [],
    },
    navMobile: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      activeItem: null,
      isMobile: false,
    }
  },
  computed: {
    navlinks() {
      return _.sortBy(this.nav, 'weight')
    },
    navlinksMobile() {
      return _.sortBy(this.navMobile, 'weight')
    },
  },
  watch: {
    $route() {
      this.activeItem = null
      this.isMobile = false
    },
  },
  methods: {
    changeMenu(item) {
      this.activeItem = this.activeItem === item.id ? null : item.id
    },
  },
}
</script>
