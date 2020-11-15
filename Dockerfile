FROM node:alpine3.12

RUN apk add --no-cache nginx supervisor vim

# Configure nginx
COPY docker/nginx.expires.conf /etc/nginx/expires.conf
RUN rm /etc/nginx/nginx.conf
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Configure supervisord
#RUN rm /etc/supervisor/conf.d/supervisord.conf
RUN mkdir /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Make sure files/folders needed by the processes are accessable when they run under the nobody user
RUN chown -R nobody.nobody /run && \
  chown -R nobody.nobody /var/lib/nginx && \
  touch /var/tmp/nginx && \
  chown -R nobody.nobody /var/tmp/nginx && \
  chown -R nobody.nobody /var/log/nginx

# Setup document root
RUN mkdir -p /var/www/html

# Switch to use a non-root user from here on
USER nobody

# Add application
WORKDIR /var/www/html

COPY --chown=nobody dist/ /var/www/html

# Expose the port nginx is reachable on
EXPOSE 5000

# Let supervisord start nginx
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

