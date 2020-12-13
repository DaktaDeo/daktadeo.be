<template>
  <div class="relative max-w-xl mx-auto max-h-full">
    <div class="my-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#DBE1EC"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>

      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ error.message }}
      </h3>
      <div v-if="error.statusCode === 404" class="my-7">
        <a
          v-if="typeof $route === 'undefined'"
          class="w-full inline-flex rounded-md shadow-sm"
          href="/"
        ></a>
        <NuxtLink
          v-else
          class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          to="/"
        >
          Back to the home page
        </NuxtLink>
      </div>

      <p v-else class="description">
        An error occurred while rendering the page. Check developer tools
        console for details.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
