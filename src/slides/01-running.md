---
title: "Docker Intro"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 1: Using Images

![First image of a black hole](blackhole.jpg)
Image credit: Event Horizon Telescope Collaboration

---

### Starting a docker container
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
---
### docker pull
---
### docker image
#### ls
#### rm
You can remove images by name or by id.
```
docker image rm <imagename>[:tag]
docker rmi <imagename>[:tag]
```
---
### docker container
You can also remove containers by name or by id.
```
docker container rm <containername>
docker rm <containername>
```
---
### docker ps
---
### docker system
#### df
#### prune

