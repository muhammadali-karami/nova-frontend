FROM node:22-bookworm-slim AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM dependencies AS build

COPY . .
RUN STATIC_EXPORT=true npm run build

FROM node:22-bookworm-slim AS production

WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    CLOUDFLARE_CF_FETCH_ENABLED=false \
    WRANGLER_WRITE_LOGS=false

COPY --from=build /app/dist/client ./dist/client
COPY --from=build /app/docker-server.mjs ./docker-server.mjs

EXPOSE 3000

CMD ["node", "docker-server.mjs"]
