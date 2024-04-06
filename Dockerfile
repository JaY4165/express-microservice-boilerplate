# Use a base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

RUN npm install -g npm@latest

# Install dependencies
RUN npm install

RUN npm install -g nodemon

# Install ts-node globally for running TypeScript code
RUN npm install -g ts-node

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on
EXPOSE 8080

# Start the application
CMD ["npm","run", "dev"]
