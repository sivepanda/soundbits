# syntax=docker/dockerfile:1.2
   
FROM node:16-alpine
ENV NODE_ENV=development

WORKDIR /soundbits

COPY ["/Server/package.json", "/Server/package-lock.json*", "./"]

RUN npm install
RUN --mount=type=secret,id=_env,dst=/home/ubuntu/.env
COPY /Server .

WORKDIR /soundbits/Server



CMD ["npm","run","start"]
EXPOSE 3000