---
title: Docker Scripts
description: more docker...
lang: en-US
image: /branch.png
date: 2020-02-07
tag: docker,script
author: kev
layout: Post
---

Delete all created docker container command

```
docker rm $( docker ps -q -f status=created)
```

Delete all exited docker container command

```
docker rm $( docker ps -q -f status=exited)
```

Delete all unused images command

```
docker rmi $( docker images -q -f dangling=true)
```
