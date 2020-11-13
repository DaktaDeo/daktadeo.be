FROM nginx:alpine

# Configure nginx
COPY docker/nginx.expires.conf /etc/nginx/expires.conf
RUN rm /etc/nginx/nginx.conf
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Setup document root
RUN mkdir -p /var/www/html

# Add application
WORKDIR /var/www/html

COPY dist/ /var/www/html

# Expose the port nginx is reachable on
EXPOSE 5000
