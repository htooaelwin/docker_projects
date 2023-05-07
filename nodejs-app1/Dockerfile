# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD [ "node", "hostname-ip.js" ]
