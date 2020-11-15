<template>
  <footer class="bg-primary-color-dark">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-7 xl:col-span-1">
          <div class="h-10 fill-light-silver fill-dot inline-svg">
            <div v-html="require(`~/assets/logos/daktadeo.svg?raw`)" />
          </div>
          <p class="text-gray-500 text-base leading-6">
            <strong>Together</strong> we'll create..<br /><strong
              >Clever Tools</strong
            >
            that <strong>Work</strong> for <strong>Humans</strong><br />
            <small>Discover, Define, Develop, Deliver, Evolve –repeat</small>
          </p>
          <div class="flex space-x-6 text-gray-400">
            <a
              v-for="channel in socials"
              :key="channel.id"
              :href="channel.link"
              :title="channel.title"
              target="_blank"
              class="hover:text-gray-500"
            >
              <div class="h-6 w-6 inline-svg fill-current">
                <div v-html="require(`~/assets/fa/${channel.name}.svg?raw`)" />
              </div>
            </a>
          </div>
        </div>
        <div
          class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-2 xl:mt-0 xl:col-span-2"
        >
          <div class="md:grid md:grid-cols-2 md:gap-2">
            <div>
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Solutions
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink to="/3d" :class="linkClasses">3D printing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/academy" :class="linkClasses"
                    >Academy</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/multipass" :class="linkClasses"
                    >MultiPass</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/web" :class="linkClasses"
                    >Web Development</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Support
              </h4>
              <!--              <ul class="mt-4 space-y-4">-->
              <!--                <li>-->
              <!--                  <a-->
              <!--                    href="#"-->
              <!--                    :class="linkClasses"-->
              <!--                  >-->
              <!--                    Pricing-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a-->
              <!--                    href="#"-->
              <!--                    :class="linkClasses"-->
              <!--                  >-->
              <!--                    Documentation-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a-->
              <!--                    href="#"-->
              <!--                    :class="linkClasses"-->
              <!--                  >-->
              <!--                    Guides-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a-->
              <!--                    href="#"-->
              <!--                    :class="linkClasses"-->
              <!--                  >-->
              <!--                    API Status-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--              </ul>-->
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-2">
            <div>
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Company
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" :class="linkClasses"> About </a>
                </li>
                <!--                <li>-->
                <!--                  <a-->
                <!--                    href="#"-->
                <!--                    :class="linkClasses"-->
                <!--                  >-->
                <!--                    Blog-->
                <!--                  </a>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <a-->
                <!--                    href="#"-->
                <!--                    :class="linkClasses"-->
                <!--                  >-->
                <!--                    Press-->
                <!--                  </a>-->
                <!--                </li>-->
                <li>
                  <a href="#" :class="linkClasses"> Partners </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Legal
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="/files/DaktaDeo Algemene leveringsvoorwaarden v2018-09.pdf"
                    :class="linkClasses"
                    download
                  >
                    Verkoopsvoorwaarden
                    <span
                      class="w-2 h-2 ml-1 inline-svg"
                      v-html="require('~/assets/icons/download.svg?raw')"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="/privacy" :class="linkClasses"> Privacy </a>
                </li>
                <li>
                  <a href="/terms" :class="linkClasses"> Terms </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-800 pt-8">
        <p class="leading-6 text-gray-500 xl:text-center text-sm">
          The DaktaDeo & Multipass logos are copyright © DaktaDeo 2011–{{
            new Date().getFullYear()
          }}. <br />All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    socials: {
      type: Array,
      required: false,
      default: () => [],
    },
    linkClasses: {
      type: String,
      required: false,
      default: 'text-base leading-6 text-gray-500 hover:text-gray-100',
    },
  },
}
</script>
