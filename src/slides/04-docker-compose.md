---
title: "Docker Compose"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 4: Running Multiple Images
It's all well and good to run individual containers with `docker run`, but what happens when you want to:
- Have a lot of configuration options
- Run multiple containers that need to communicate
- Run a multi-stage pipeline

---

## Docker Compose
`docker-compose` takes much of the pain out of all of those scenarios.

---

### Docker Compose Syntax
  `docker-compose` uses yaml to describe how you want to run manage your containers. The following is a short, but complete dockerfile. That can run (or build) the image `flaskapp`, maps some ports, mounts a directory into the container, and sets some environment variables. How cool is that!

```
version: "3"
services:
  flask:
    image: "flaskapp"
    build:
      context: "./flask/"
    ports:
      - "8080:5000"
    volumes:
      - "./src/:/src/"
    environment:
      - "CONFERENCE:ResBaz"
      - "CITY:Tucson"
```

---

### Running Containers with Docker Compose
While in the directory with the docker-compose.yml file, simply run:

```
docker-compose up
```

You don't have to add any additional flags to the command--all your configuration was done in the yml file!

---

### Building Images with Docker Compose
You can use `docker-compose` for lots of things. You can build the images in the docker-compose.yml file:

```
docker-compose build
```

---

### Pushing/Pullling Images with Docker Compose
If you are pulling images from Docker Hub or you are using a private registry:

```
docker-compose pull
```

Likewise for:
```
docker-compose push
```

---

## Communication across containers
You may find that you need different processes to share data in one way or another. You may want to:
- Store data in a database and use that data in another container
- Run a Shiny webapp that hits a Flask API
- Share common packages across containers

---

### Mounting Volumes
Probably the simplest way to share data across containers is to mount it in to the filesystem

#### Volumes

#### Bind Mounts

---

### Networking

## Multi-stage Pipelines
What happens when you have several steps in your processing pipeline? You may have to run some preprocessing scripts on your data to clean it, one or more steps to run your analysis, other scripts to run to generate plots (or even your final manuscript). How do you do that if all the steps use different components?
