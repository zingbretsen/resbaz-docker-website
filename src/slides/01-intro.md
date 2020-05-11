---
title: "Docker Intro"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Docker for World Domination


```
     me: zach  ingbretsen    
website:      zingbretsen.com
twitter:     @zingbretsen
  email: zach@zingbretsen.com
```

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
 -  Image
 -  Container

---

## Compatibility

"Works on my machine"

Stemmer/C++ build tools story

Installing same packages on 3 computers w/ dependencies

---
## Standardization
---
### Starting a docker container
```bash
docker run hello-world
```
---
```
Unable to find image 'hello-world:latest' locally
```
---
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete 
Digest: sha256:8e3114318a995a1ee497790535e7b88365222a21771ae7e53687ad76563e8e76
Status: Downloaded newer image for hello-world:latest
```
---
```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
