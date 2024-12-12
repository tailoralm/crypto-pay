
FROM node:22-alpine

WORKDIR /usr/app/frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:docker"]
