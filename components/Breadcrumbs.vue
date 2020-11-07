<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol
      class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8 my-4"
    >
      <li class="flex">
        <div class="flex items-center">
          <a href="/" class="text-gray-400 hover:text-gray-500">
            <svg
              class="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
          </a>
          <span class="sr-only">Home</span>
        </div>
      </li>
      <li v-for="link in crumbs" :key="link.identifier" class="flex">
        <div class="flex items-center space-x-4">
          <svg
            class="flex-shrink-0 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <nuxt-link
            v-if="link.url"
            class="text-sm leading-5 font-medium text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out"
            :to="link.url"
            >{{ link.name }}
          </nuxt-link>
          <span v-else class="text-sm leading-5 font-medium text-gray-400"
            >{{ link.name }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
}
</script>
