FROM node:10.15.0-jessie
WORKDIR /api-gateway-service

COPY . .
RUN npm install

EXPOSE 4000
CMD [ "npm", "run", "docker:prod"]