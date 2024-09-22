FROM node:22-alpine

# Set the working directory
WORKDIR /usr/app/backend

# Install dependencies first to leverage Docker cache
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the startup command with nodemon for development
CMD ["npm", "start"]
