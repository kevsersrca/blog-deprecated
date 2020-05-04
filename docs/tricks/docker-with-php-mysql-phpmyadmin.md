---
title: Docker with php + mysql + phpmyadmin
description: lets create docker compose file for mysql and phpmyadmin.
lang: en-US
image: /docker.png
date: 2020-05-12
tag: docker
author: kev
layout: Post
---

Create a docker-compose.yml file

```bash
version: "3.1"
services:
    db:
        image: mysql:8.0
        ports:
            - "3306:3306"
        command: --default-authentication-plugin=mysql_native_password
        environment:
            MYSQL_DATABASE: test
            MYSQL_USER: user
            MYSQL_PASSWORD: userpasswd
            MYSQL_ROOT_PASSWORD: rootpasswd
        networks:
            - default
    phpmyadmin:
        image: phpmyadmin/phpmyadmin
        links:
            - db:db
        ports:
            - 8000:80
        environment:
            MYSQL_USER: user
            MYSQL_PASSWORD: userpasswd
            MYSQL_ROOT_PASSWORD: rootpasswd
```
and then run the following command

```
docker-compose up -d
```

if its occurs error , you can look up logs

```
docker logs container-id
```
