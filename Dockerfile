FROM node:18-alpine AS builder

ARG CN_MIRROR=false

WORKDIR /app

RUN if [ "$USE_CHINA_MIRROR" = "true" ]; then \
    npm config set registry https://registry.npmmirror.com && \
    npm config set disturl https://npmmirror.com/dist && \
    npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass && \
    npm config set puppeteer_download_host https://npmmirror.com/mirrors; \
    fi


COPY package*.json ./

RUN npm ci --include=dev

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

RUN chown -R node:node . && \
    chmod -R 755 .
USER node

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]