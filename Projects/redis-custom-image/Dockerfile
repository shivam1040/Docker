#docker file to create custom image

#here alpine is more like an OS on which redis can be installed
FROM alpine

#Download and install dependency, here installing redis dependency, notice that apk add... is not a docker cmd but a cmd related to alpine
RUN apk add --update redis

#when this cmd is run in the next iteration of new image creaion then new image is not generated rather cache is used because steps until apk add redis has alredy been finished whne the image creation happened for the first time so now cache is used till the point steps don't differ, similar is followed when same dockerfile is run for twice
#new image is created also when order of dockerfile steps change
RUN apk add --update gcc

#startup commands
CMD ["redis-server"]

#after downloading alpine a temporary container is created for all the immediate commands in dockerfile, the new temporary image wraps the image created for the last immediated cmd and runs the new commands and again creates a new container, this creation of immediate container goes on happening until end of dockerfile steps
