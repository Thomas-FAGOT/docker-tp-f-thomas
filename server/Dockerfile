FROM node:23-alpine3.20 AS base
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then npm install --only=production; else npm install; fi
COPY . .
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    mkdir -p logs && chown -R appuser:appgroup logs

FROM base AS dev
USER root
RUN apk add --no-cache bash
USER appuser
CMD ["npm", "start"]

FROM base AS prod
ENV NODE_ENV=production
RUN rm -rf node_modules && npm install --only=production && rm -rf /usr/share/man /usr/share/doc
USER appuser
CMD ["sh", "-c", "npm start > logs/app.log 2> logs/error.log"]
