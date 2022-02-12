FROM node:16.14.0-alpine
EXPOSE 4200
# Set working directory to the angular project copy
WORKDIR /usr/local/app
# Copy the angular files to a new directory
COPY ./ /usr/local/app

# Install dependencies
RUN npm install

# Install angular cli
RUN npm install -g @angular/cli

# Run application
RUN ng serve --configuration=production