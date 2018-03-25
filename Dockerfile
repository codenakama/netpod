FROM mhart/alpine-node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install
RUN npm run build

# Bundle app source
COPY . /usr/src/app


EXPOSE 80:3000
CMD [ "npm", "start" ]