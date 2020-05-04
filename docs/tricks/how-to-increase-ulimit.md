---
title: How to increase ulimit ?
description: Let increase ulimit count in sysctl
lang: en-US
image: /sysctl.jpg
tag: sysctl
author: kev
date: 2019-12-12
layout: Post
---

[[toc]]

## Let increase ulimit count in sysctl

If working concurrency and wanted more than tcp and udp connection.Following to commands.

Firstly, upgrade ip port range with sysctl command

```sysctl
sysctl -w net.ipv4.ip_local_port_range="15000 64000"
echo 15000 64000 > /proc/sys/net/ipv4/ip_local_port_range
sysctl -p
```

and append .bashrc and .bash_profile file by running.

```bash
echo "ulimit -n 64000" >> .bashrc ; echo "ulimit -n 64000" >> .bash_profile
```

and save
```bash
source .bashrc && source .bash_profile
```

Happy coding.
