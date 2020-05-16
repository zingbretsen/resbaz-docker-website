---
title: "Docker Intro"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 1: Using Images

![First image of a black hole](blackhole.jpg)
Image credit: Event Horizon Telescope Collaboration

---

## Terminology
### Image
The pre-packaged environment, data, and code.
### Container
An instance of an image that can execute code.

---

## Starting a docker container
```bash
docker run hello-world
```
---
```output
Unable to find image 'hello-world:latest' locally
```
---
```output
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete 
Digest: sha256:8e3114318a995...
Status: Downloaded newer image for hello-world:latest
```
---
```output
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
    ...
    etc.
```
---
### Exercise 0
[Try it yourself](/exercises/0)

---

## Essential Commands
```
docker <command> [subcommand] [options]

docker
docker run <image>
docker run --rm -it <image>
docker run --help
docker container stop <containername>
```

---

### docker run
`docker run <image>` will try to run the specified image. It first looks to see if you already have that image locally. If you do not already have the image, it will try to pull it from Docker Hub.

There are many optional flags for `docker run`. Try `docker run --help` to see what options there are.

NOTE: If you already have the image, `docker run` will *not* check to see if there is a newer version of the image.

---

### docker pull
`docker pull <image>` checks to see if there is a newer version of the image up on Docker Hub. If there is, it will pull down whatever updates you need.

---
### docker image
Some Docker commands have further sets of subcommands. Run `docker image` to see the full list of subcommands. Some of the more useful ones are:

#### docker image ls
This will show the list of the images that you have locally.

#### docker image rm
You can remove images by name or by id.
```
docker image rm <imagename>[:tag]
docker rmi <imagename>[:tag]
```
---
### docker container
Try running `docker container` to see all the subcommands.

```
  attach      Attach local standard input, output, and error streams to a running container
  cp          Copy files/folders between a container and the local filesystem
  exec        Run a command in a running container
  logs        Fetch the logs of a container
  ls          List containers
  start       Start one or more stopped containers
  stop        Stop one or more running containers
```

You can also remove containers by name or by id.
```
docker container rm <containername>
docker rm <containername>
```

---

### docker ps
`docker ps` will list all currently running containers. This is very helpful if you need the name or id of a container that you want to operate on.

---

### docker system
`docker system` provides a few useful commands for managing Docker on your system.

#### docker system df
Docker images (and containers) can take up a lot of space on your system. `docker system df` will show you what is taking up space.

#### docker system prune
When you want to clear our your old containers and images, `docker system prune` will try to clear out what is no longer needed without removing images that you still want.

---

### Exercise Break
Head on over to [Exercise 2](/exercises/2) to run Python.
