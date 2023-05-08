FROM node:20-alpine3.16
LABEL maintainer="yugsharma@protonmail.com"

WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY frontend/ ./

# Build the React application
RUN npm run build

# Expose port 3000 to the host
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
