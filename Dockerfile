# Build for local development
FROM node:18-alpine AS development

WORKDIR /usr/src/just-proteins-backend

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

# Build for production
FROM node:18-alpine AS build

WORKDIR /usr/src/just-proteins-backend

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/just-proteins-backend/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

# Production
FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/just-proteins-backend/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/just-proteins-backend/dist ./dist

CMD ["node", "dist/main.js"]