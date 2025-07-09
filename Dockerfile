# Select OS/Environment
FROM node:22-alpine

# Choose working directory inside docker
WORKDIR /app

# Copy package.json to install npm packages inside docker
# COPY source destination
COPY package*.json ./

# Running shell command
RUN npm install

# Copy rest of the application
COPY . .

# Port Exposure
EXPOSE 5050

# Entry point
CMD ["node", "server.js"]

# docker build -t backend-app .
# docker run -d -p 5006:5050 --name backend backend-app
# docker ps -a
# docker stop CONTAINER_ID
# docker rm CONTAINER_ID