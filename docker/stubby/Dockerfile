FROM node:alpine
RUN apk update
RUN apk --no-cache add curl && npm install -g stubby
RUN apk add bash
RUN mkdir -p /stubby
WORKDIR /stubby

CMD ["stubby", "-d", "stub.json"]
