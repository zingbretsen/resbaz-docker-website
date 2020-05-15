---
title: "Docker Intro - Exercise 0"
author: "Zach Ingbretsen"
pagetype: "exercise"
---

## Hello, World!
Please install Docker before the conference, if possible. You can find instructions on how to get Docker from their website: [Getting Docker](https://docs.docker.com/get-docker/)

```
docker run hello-world
```

If this is your first time running this command you should see something like:
```output
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete 
Digest: sha256:8e3114318...
Status: Downloaded newer image for hello-world:latest
```

That should be followed by the output of the hello-world program:

```output
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

---

## Hello again, World!
Now run it again!

```
docker run hello-world
```

You should have the same program output as before, but you should *not* have seen the message about not having the hello-world image locally. You already have it!

### Extra credit
As they suggest, try running
```
docker run -it ubuntu bash
```

This will download the Ubuntu image to your computer and will start a container running a bash shell. You can interact with this like any normal Ubuntu install! Try running 'ps', though. What processes are running inside the container?

---

## Hello, Python!


```
docker run -it python:alpine
```

### Extra credit
- What happens if you don't include the '-it'? (Hint: ctrl+c will get you back to your command prompt)

---
## Hello, Old Containers!
When you quit out of a running container, it not go away by default. Let's take a look at what containers have stuck around.

```docker container ls --all```

You may see something like:
```output
CONTAINER ID        IMAGE               COMMAND             CREATED        ...
c1196afec1b8        python:alpine       "python3"           3 minutes ago  ...
0dade31a398a        python:alpine       "python3"           3 minutes ago  ...
f427e50dde04        python:alpine       "python3"           3 minutes ago  ...
f875ef4236ad        python:alpine       "python3"           3 minutes ago  ...
```

## Goodbye, Old Containers!
We can clean up all those unused containers with the following:

```
docker system prune
```

Check to make sure that all the containers have been removed. If some have stuck around, it's possible that they are still running. How do you think you can tell Docker to [stop](https://docs.docker.com/engine/reference/commandline/container_stop/) a container?

---

## RStudio
Check out the repositories that are available from [Rocker](https://hub.docker.com/u/rocker) on Docker Hub. They have many images avilable, including ones that have many geospatial packages pre-installed. Anyone who has tried to install geospatial packages on their own will know that this is not a trivial task.

For now, let's run [RStudio](https://hub.docker.com/r/rocker/rstudio):

```
docker run -d --name rstudio -p 8787:8787 -e PASSWORD=yourpasswordhere rocker/rstudio:3.6.3
```

In your browser, launch [http://localhost:8787](http://localhost:8787), and login with the password specified in the command above.

You now have a fully functional containerized version of RStudio!

---

## Docker Hub

Find an interesting image on [Docker Hub](https://hub.docker.com/search?q=&type=image). Try running it locally on your computer!

### Extra credit

 - Many Docker Hub repos have the Dockerfile that generates the image. Check out the Dockerfile for the image you found. We will cover Dockerfiles in the next section.

---

## Your First Dockerfile
Create a new directory to work in, and add a file called "Dockerfile" with the following content:

```
FROM python:alpine

RUN pip install pyjokes
CMD pyjoke -c neutral
```

In your terminal, navigate to the directory you just created and run the following command:

```
docker build -t pyjoke .
docker image ls
```

```output
REPOSITORY                     TAG                 IMAGE ID            CREATED             SIZE
pyjoke                         latest              8a657ec946d0        5 minutes ago       113MB
```

You should see your new hello world image in the list. Run it!

```
docker run --rm pyjoke
```

You should see a random joke in your output like:
```output
I've been using Vim for a long time now, mainly because I can't figure out how to exit.
```

You have now built and run your very own custom Docker image! We will quickly move on to move useful tools for research, but you have to start somewhere!

---

## RStudio Revisited
Rather than just running the RStudio image and installing packages on the commandline, we can build your packages directly into the image!

In a new directory, create a file called Dockerfile with the following contents:

```
FROM rocker/rstudio:3.6.3

ENV PASSWORD=yourpasswordhere 
EXPOSE 8787 

RUN install2.r fortunes
```

Once again, we need to build the image:

```
docker build -t rstudio-fortunes .
```

Now we can run your image with this command:

```
docker run --rm --name rstudio -p 8787:8787 -d rstudio-fortunes
```

Because we have named our container, we can stop the container with:
```
docker stop rstudio
```

NOTE: In the next section, we will talk about docker-compose, which will let us move much of the configuration information (such as the port and volume mappings) into a config file.
