# FROM node:16.15.0 as build

# WORKDIR /app
# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.18
# COPY --from=build /app/build /app
# WORKDIR /app
# RUN ls
# COPY nginx.conf /etc/nginx.conf

FROM nginx:1.18.0
WORKDIR /app

COPY /build /app

COPY nginx.conf /etc/nginx/nginx.conf