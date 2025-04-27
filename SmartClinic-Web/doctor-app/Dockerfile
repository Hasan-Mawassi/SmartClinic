# Build Stage
FROM node:22.15.0-alpine3.21 AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

# Copy built React app to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
