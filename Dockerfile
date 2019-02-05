FROM node:carbon-alpine as build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /opt/app/build .
COPY nginx/ejeff.conf /etc/nginx/conf.d/ejeff.conf