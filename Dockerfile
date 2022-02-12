FROM node:16.14.0-alpine

# Copy the angular files to a new directory
COPY ./ /usr/local/app

# Set working directory to the angular project copy
WORKDIR /usr/local/app

# Install dependencies
RUN npm install

# Run application
RUN ng serve --configuration=production