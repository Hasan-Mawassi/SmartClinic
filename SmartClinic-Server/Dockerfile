# Use Node.js image
FROM node:22.15.0-alpine3.21

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 5000

# Run the server
CMD ["npm", "start"]