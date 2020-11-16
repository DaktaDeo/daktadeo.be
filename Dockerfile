FROM registry.gitlab.com/daktadeo/self/daktadeo-nuxt/nginx:rc1

# Add application
WORKDIR /var/www/html

COPY  dist/ /var/www/html
