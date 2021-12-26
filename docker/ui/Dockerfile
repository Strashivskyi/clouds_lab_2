FROM node:16-alpine AS build-step

WORKDIR /app

RUN apk --no-cache add git

RUN git clone -b lab-4 https://github.com/Strashivskyi/clouds_lab_2.git
WORKDIR /app/clouds_lab_2

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-step /app/clouds_lab_2/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
