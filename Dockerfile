FROM nginx
COPY /build /usr/share/nginx/html

FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./

RUN rm -rf node_modules
RUN npm install
RUN npm ci
RUN npm run build --if-present