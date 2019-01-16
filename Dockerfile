FROM alpine:latest as builder
WORKDIR /app
RUN apk add yarn
COPY . .
RUN yarn && yarn build

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD [ "node", "index.js" ]
