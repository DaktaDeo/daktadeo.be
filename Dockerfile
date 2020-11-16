FROM registry.gitlab.com/daktadeo/self/daktadeo-nuxt/nginx:rc1
COPY dist/ /usr/share/nginx/html

EXPOSE 5000

