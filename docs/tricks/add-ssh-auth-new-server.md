---
title: SSH Authorize
description: Lets push ssh key for new creation server
lang: en-US
image: /ssh.png
date: 2019-12-12
tag: ssh-key,linux
author: kev
layout: Post
---

[[toc]]
### How to push ssh authorized key?

if server is new creation and doesnt have a ssh file.

```bash
 mkdir ~/.ssh && touch ~/.ssh/authorized_keys &&
 echo 'ssh-rsa is here' >> ~/.ssh/authorized_keys &&
 chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
```

already ssh folder

```bash
 echo 'ssh-rsa is here' >> ~/.ssh/authorized_keys
```

Thanks for reading.
