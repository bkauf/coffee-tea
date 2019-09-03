FROM node:8-alpine
RUN apk update

# Create app directory
RUN mkdir -p /usr/src/app

#change working DIR
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app

RUN npm install
# Bundle app source
COPY . /usr/src/app

#open ports
EXPOSE 8080

CMD ["npm", "start"]
