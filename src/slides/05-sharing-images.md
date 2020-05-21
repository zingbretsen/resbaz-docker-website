---
title: "Sharing Images"
author: "Zach Ingbretsen"
pagetype: "slide"
---

# Section 5: Sharing Images
When the time comes that you want to share your image, there are several options.
- Sending the Dockerfile
- Docker Hub
- A private registry
- Sending an archive directly

---
## Sending the Dockerfile
When you publish your code, you may choose to share your Dockerfile/docker-compose.yml files as well. This is a valid option, but it *does not* guarantee that images built from this Dockerfile will run exactly the same. Reinstalling libraries and packages may introduce newer versions of code than were run originally.

In an ongoing, active project, this is a viable option. It may cause problems if you revisit the project in the future.

---

## Docker Hub
We pulled images from Docker Hub throughout this whole workshop. In your Dockerfiles, when it executes `FROM <image>` it will pull `<image>` from Docker Hub if it is not found locally.

We can also push images to Docker Hub for others to use!

---

### Tagging Images
We will need to `tag` the image to be able to push the image to Docker Hub. Tagging images allows you to name images and assign versions. In order to push to Docker Hub, we need to add our username to the image:
```
docker tag hello-world <username>/hello-world
```

We can also assign a version "tag" to our image:
```
docker tag hello-world <username>/hello-world:<tag>
```

This provides a way to maintain different versions of your environments, similar to how git lets you maintain different versions of your code.

---

### Pushing to Docker Hub
We need to first log in to Docker Hub:
```
docker login
```

Then we can simply push our tagged image:
```
docker push <username>/hello-world
```

---

### Public vs. Private Repos
Docker Hub allows you to push an unlimited number of images to public repositories. You may have one private repository by default, but can pay to have more private repositories.

---

## Private Registries
Much like how you can push to Docker Hub, you can push your images to other registries as well:
- Azure ACR
- AWS ECR
- GCP Container Registry
- Privately hosted registry

## Exporting the Image
Docker provides a way to save one or more images as a tar archive, which you can then send to a colleague.

### Saving images
If you want to share the images directly, you can save the images to an archive, which you can then share like any other file:
```
docker save -o <filename>.tar image1 image2 imageN
```

### Loading images
To load the images back in on the new system, you print out the contents of the archive and pipe that into the docker load command:
```
cat <filename>.tar | docker load
```
