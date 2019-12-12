---
title: How to block ip in server ?
description: Lets block ip address in server with iptables
lang: en-US
prev: false
next: false
editLink: true
image: /iptables.png
date: 2019-12-12
---

### Lets block ip address in server with iptables

For example block all inbound traffic for 192.168.122.12 ip address.

```bash
iptables -A INPUT -s 192.168.122.12 -j DROP
```

And other example, block all subnet.

```bash
iptables -A INPUT -s 192.168.1.1/24 -j DROP
```

and after changing save the commands.

```bash
service iptables save
```


Thanks for reading.
