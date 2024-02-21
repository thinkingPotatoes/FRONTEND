# Stage 1: install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm install

# Stage 2: start
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY public ./public
COPY package.json tsconfig.json tsconfig.node.json vite.config.ts index.html ./
CMD ["npm", "run", "dev"]

EXPOSE 5100