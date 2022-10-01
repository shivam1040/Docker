#alpine is small lightweight less dependency containing image
#FROM alpine

#getting node js image varaint alpine
FROM node:alpine

#mentioning default work dir of node js is requires after node 15, when this is defined all the dir ops such as copy move etc will happen relative to this directory
#this also affects exec docker command
WORKDIR /app

#moves file in current project dir to docker container during building process, this . refers to build context we give during docker build cmd
COPY ./ ./

#step1 to follow to avoid rebuilding image from scratch when only one or two files have changed, this means copying the changed file, above copy should be avoided
#COPY ./package.json ./

RUN npm install

#step2 to follow to avoid rebuilding image from scratch when only one or two files have changed, this means copying the rest of the files which don't affect npm install
#COPY ./ ./

CMD ["npm", "start"]