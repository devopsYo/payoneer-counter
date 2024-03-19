FROM node:20.11.1-alpine as server
WORKDIR /app
COPY --chown=node:node package*.json ./
ENV NODE_ENV production
RUN npm ci
COPY . .
ENV PORT 3000
EXPOSE 3000
CMD ["node", "server.js"]