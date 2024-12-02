# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend app into the container
COPY . .

# Expose the port the app runs on (React apps typically use 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
