# Stage 1

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install && \
	npm run build --prod


# Stage 2

FROM nginx:alpine
COPY --from=node /app/dist/DroneInterface /usr/share/nginx/html
