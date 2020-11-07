<template>
  <footer class="bg-primary-color-dark">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <div class="h-10 fill-light-silver fill-dot inline">
            <Logo></Logo>
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
              <img
                :src="require(`~/assets/fa/${channel.name}.svg`)"
                :alt="channel.name"
              />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Solutions
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="/3d"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    3D printing
                  </a>
                </li>
                <li>
                  <a
                    href="/academy"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Academy
                  </a>
                </li>
                <li>
                  <a
                    href="/multipass"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Multipass
                  </a>
                </li>
                <li>
                  <a
                    href="/web"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Web Development
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Support
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4
                class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase"
              >
                Company
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Partners
                  </a>
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
                    href="/uploads/DaktaDeo Algemene leveringsvoorwaarden v2018-09.pdf"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Verkoopsvoorwaarden
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    class="text-base leading-6 text-gray-500 hover:text-gray-100"
                  >
                    Terms
                  </a>
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
import Logo from '@/components/Logo'
export default {
  name: 'Footer',
  components: { Logo },
  props: {
    socials: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
