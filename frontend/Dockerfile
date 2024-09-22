# Use an official Node.js LTS image
FROM node:22-alpine

# Set the working directory
WORKDIR /usr/app/frontend

# Install dependencies first to leverage Docker cache
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the startup command with nodemon for development
CMD ["npm", "run", "start:docker"]
