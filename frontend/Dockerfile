# Use an official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React code into the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Serve the built app with serve
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
