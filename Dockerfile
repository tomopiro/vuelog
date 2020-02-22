FROM node:12.12.0-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm \
    npm install -g @vue/cli
CMD ["/bin/sh"]