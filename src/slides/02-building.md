---
title: "Building Images"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 2: Building Images
## Dockerfile
You describe all of the steps required to create your image in a [Dockerfile](https://docs.docker.com/engine/reference/builder/). You will include all of the steps required to create and configure your image.

Here is an example of a complete (albeit small) Dockerfile:

```
FROM python:alpine

RUN python -m pip install pyjokes

ENV type=neutral

CMD pyjoke -c $type
```

---

### FROM
```
FROM python:alpine
```
The first line of the dockerfile should be the image that you are basing your image off of. This could be something from Docker Hub (e.g., Python, ubuntu, redis, etc.), an image that you built locally, or an image from another container registry.

In our current example we are using a Python image. This particular image is itself based on Alpine, an extremely small operating system frequently used for running containers.

---
 
### RUN
```
RUN python -m pip install pyjokes
```
You will almost always want to install additional software or make some kinds of configuration changes inside your images. The RUN command allows you to run commands as if you were at the command prompt inside your image. Since we are using a Python base image, we have the pip executable available for us to install Python packages.


---

### ENV
```
ENV type=neutral
```
Docker allows us to create environment variables in our images that optionally can provide default values when we run our containers. These can be overridden when we run our containers.

If your analysis requires API keys or other secrets, you can leave those details out of your Dockerfile and provide them at runtime. This will allow anyone who has the proper keys to run your scripts, but will not expose any secrets if someone inspects your image.

---

### CMD
```
CMD pyjoke -c $type
```
CMD specifies the default command to run when starting your container. This *can* be overridden when you run your container

---

### ENTRYPOINT
```
ENTRYPOINT pyjoke -c $type
```
ENTRYPOINT is another way to specify the default command to run when starting your container. This *cannot* be overridden when you run your container.

---

## Putting it all together
Now that you have a Dockerfile, we need to build it into an image!

### docker build
You can build an image out of your Dockerfile with the docker build command:

```
docker build -t pyjoke .
```

Run this command in the directory where you have your Dockerfile. This will build an image with the tag (-t) specified. The dot indicates that Docker should use the current directory to build the image.

---

### docker run, again
`docker run` looks first for a local image with the given name. If it does not
find a local image with that name, it will try pulling from Docker Hub (as you
saw earlier). This time, since we've built the image locally, docker can run our
local image.

```
docker run pyjoke
```

---

## Important Details
There are a few details to keep in mind when building a Dockerfile:
- What is the directory
- What order you run your commands in
- Layers only add, never subtract

---

### Build Context
When you run `docker build`, Docker sends everything in the directory to the Docker daemon, even if those files are not used in your image.

Try to limit the number and size of the files that are in the directory you are building.

You must have all the files you need in the directory you are building--The build agent will not have access to other files on your system.

---

### Layer Caching
The order of the commands in your Dockerfile matters! Docker will cache each command that you run in your Dockerfile. This speeds up the build process, but can lead to some sneaky gotchas.

The first time you docker build, Docker will run every line. Each subsequent time that you build, Docker will find the first change in your Dockerfile and build from there. This includes changes to the Dockerfile or changes to files that are copied in to your image.

---

### What is the right order?
Generally speaking, you should put commands for things that change less frequently towards the top of the file, and things that change more frequently towards the bottom of the file.

Install your system libraries towards the top.

Copy in your code towards the bottom.

---

### Installing system packages
Because of the layer caching in Docker, you will want to update your repositories in the same command as installing packages:
```
RUN apt-get update && \
    apt-get install -y vim
```

Do not issue those as two separate `RUN` commands.

---

### Size Considerations
If you create files in one command, and delete them in a subsequent command, this will not reduce the size of your image. When possible, try to clean up after yourself as you go along.

```
RUN apt-get update && \
    apt-get install -y vim && \
    rm /etc/apt/sources.list.d/*
```
