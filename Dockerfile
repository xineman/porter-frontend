FROM node:10-alpine
EXPOSE 3000
WORKDIR /app
RUN apk add yarn
COPY . .
RUN yarn
RUN yarn build
CMD [ "node", "index.js" ]
