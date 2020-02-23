FROM node:12.12.0-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm \
    npm install -g @vue/cli \
    npm install npm-run-all --save-dev \
    npm install processmd --save-dev
CMD ["/bin/sh"]