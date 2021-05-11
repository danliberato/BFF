# specify a base image
FROM node:alpine

# run internal commands inside intermediary images
# in this case we are installing all the dependencies
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default commando for running our container
CMD [ "npm", "start" ]