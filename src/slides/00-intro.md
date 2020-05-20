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
Have you ever tried and failed to reproduce the results of a newly published paper? Or have you ever received code from a colleague that just 👏 won't 👏 run 👏 for 👏 you?

---
## Works on my machine
![shrug](./elmo_shrug.webp)

---
## What if it didn't have to be that way?
![docker logo](./docker-logo.png)

---
## What is Docker?
[Docker](https://en.wikipedia.org/wiki/Docker_%28software%29) is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. 

---
## What is Docker (in English)?
Docker lets you package up your code along with the environment it needs to run in.

---

## Not Just a VM
Virtual machines are another way to build an environment for your code to run in, but VMs:
- Use a lot of resources
- Are slow to start
- More difficult to share
- Can't generally be re-created from a single file

---

## Benefits of Docker
- Docker images can be run on most OSes, and will work exactly the same across systems.
- You can create a Docker image on Windows and it will run exactly the same on a Linux of Mac computer, or even up in the cloud.
- Images can be entirely self contained, and thus not impacted by your local system configuration.
- Images will always run exactly the same--The same inputs will yield the same outputs.*
*Unless you are have non-deterministic code

---

## How does it work?
Docker runs as a daemon on your computer. You will mostly interact with it via the Docker CLI.

Docker ships with a Linux kernel, which is shared across all of your running containers. This allows Docker to run multiple containers without the overhead that running multiple VMs would have.
