FROM node:22-bookworm-slim AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM dependencies AS build

COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS production

WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    CLOUDFLARE_CF_FETCH_ENABLED=false \
    WRANGLER_WRITE_LOGS=false

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "exec ./node_modules/.bin/wrangler dev --config dist/server/wrangler.json --ip 0.0.0.0 --port \"${PORT:-3000}\""]
