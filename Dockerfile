FROM node:20.11.1-alpine as server
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
EXPOSE 3000
CMD ["node", "server.js"]