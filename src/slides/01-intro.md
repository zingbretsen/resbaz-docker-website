---
title: "Docker Intro"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Docker for Reproducibile Research

- Zach  Ingbretsen
- twitter: [@zingbretsen](https://twitter.com/zingbretsen)
- email: [resbaz@zingbretsen.com](mailto:resbaz@zingbretsen.com)

---
# Section 0: Why Docker?

---
## Works on my machine
![shrug](./elmo_shrug.webp)

---
## What if it didn't have to be that way?

---
## What is Docker?
[Docker](https://en.wikipedia.org/wiki/Docker_%28software%29) is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. 

---

## Is it just a VM?
No

---
## How do containers differ from VMs?
VMs run a full operating system. Containers generally run a single main process.

---

## Benefits of Docker
- Compatibility
- Standardization
- Portability
- Reproducibility
- Isolation
- Scalability

---
## Terminology
### Image
The pre-packaged environment.
### Container
An instance of an image that can execute code.

---

## Compatibility

"Works on my machine"

Stemmer/C++ build tools story

Installing same packages on 3 computers w/ dependencies

---
## Standardization
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


---
# Section 2: Building Images
## Dockerfile
### FROM
```
FROM python:alpine
```

---

### docker build
You can build 
```docker build -t <imagename> .```
### RUN
### Layer Caching 

---

# Section 3: Running Multiple Images
## Docker Compose
