FROM node:boron

# Create structure that will be used
# as application entrypoint
RUN mkdir -p /usr/src/app/node-version
WORKDIR /usr/src/app/node-version

# Copy application to entrypoint
COPY . /usr/src/app/node-version
COPY package.json /usr/src/app/node-version

# Install all dependencies
RUN npm install
EXPOSE 8000

# Start application
CMD [ "node", "/usr/src/app/node-version/server.js" ]