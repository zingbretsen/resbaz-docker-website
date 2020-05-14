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
