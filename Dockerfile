# Multi-stage Dockerfile that produces a static export served by nginx.
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
