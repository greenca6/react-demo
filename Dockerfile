FROM node:8.9.4-alpine

WORKDIR /app

RUN npm install -g serve

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD serve -s build
