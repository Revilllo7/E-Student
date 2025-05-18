FROM node:16

WORKDIR /app

COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./vite.config.js /app/vite.config.js

RUN npm install

CMD ["npm", "run", "dev"]