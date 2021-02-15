FROM node:10-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/onlineshop-ui /usr/share/nginx/html