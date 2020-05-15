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

## Important Details
### Build Context

---

### Layer Caching
The order of the commands in your Dockerfile matters! Docker will cache each command that you run in your Dockerfile.
The first time you docker build, Docker will run every line.
Each subsequent tome that you build, Docker will find the first change in your Dockerfile and build from there.

---

### What is the right order?
