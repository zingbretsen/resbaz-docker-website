---
title: "Working with Your System"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 3: Working with Your System
You will usually want to use files on your computer inside your Docker container or use applications running inside your container on your computer. Even though one of the benefits of containers is the ability to isolate your code and environment from the rest of your system, that doesn't mean that you can't have some interaction between your system and your containers!

## Filesystem

### Volumes
The first thing that you may want to do is to persist data between sessions or even to share data between containers. This can be accomplished by using volumes:

```
docker run -it -v persistentdata:/mydata python:alpine
```

We can now write to the /mydata directory from Python, and then access that data later (if we mount the same volume). We can use this to store intermediate steps in our processing pipeline.

---

#### Syntax
The -v signifies that we are mounting a volume. We then provide the name of the volume, and the path inside the container where we want that volume to be mounted.

```
docker run -it -v persistentdata:/mydata python:alpine
```

---


### Bind Mounts
Whereas volumes persist data between container sessions, bind mounts actually mount your local filesystem into the Docker container. This allows your containers to access files on your filesystem. By doing so, you can:
- Run scripts from your Docker environment on your local files.
- Run scripts from your local filesystem inside Docker.

The syntax is almost the same as for mounting a volume, but you must give Docker an absolute path to a directory on your system.

---

### New mount syntax
Docker has a new `--mount` syntax for both bind mounts and volumes. They recommend this new syntax because it is more explicit:

Mounting a volume:
```
docker run -it --mount 'type=volume,src=persistenttmp,target=/hosttmp' ubuntu
```

A bind mount:
```
docker run -it --mount 'type=bind,src=/tmp,target=/hosttmp' ubuntu
```

### docker cp
If you did not mount anything into your container, but you still want to retrieve data from inside your container (or put some data into your container), all is not lost! `docker cp` will let you copy data into or out of a running (or stopped!) container:

```
docker cp /path/to/localsrc  <name of container>:/path/to/containerdest
docker cp <name of container>:/path/to/containersrc /path/to/localdest
```

## Networking

### Ports
You will often want to run a service in a container that you interact with via a port on your network. Some examples of this are:
- Running RStudio in Docker and accessing it via your web browser
- Ditto for Jupyter Notebooks
- Running a Flask app in a container sending POST requests to it

Docker, by default, will not let you connect to a port in the container unless you explicitly map it to a port on your computer.

By default RStudio launches on port 8787:
```
docker run -p 8787:8787 rocker/rstudio
```

### Networks
