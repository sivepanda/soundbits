# syntax=docker/dockerfile:1
   
FROM node:18-alpine
ENV NODE_ENV=development

WORKDIR /soundbits

COPY ["/Server/package.json", "/Server/package-lock.json*", "./"]

RUN npm install

COPY /Server .

WORKDIR /soundbits/Server



CMD ["npm","run","start"]
EXPOSE 3000