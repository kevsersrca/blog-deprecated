---
title: How does git branch work?
description: Git branch add, list and delete
lang: en-US
image: /branch.png
date: 2019-12-11
tag: git-branch
author: kev
layout: Post
---

[[toc]]

### How to create new brach

```bash
git checkout -b feature/feature-name
```

### How to list branches

```bash
git branch
```


### How to delete local branch

```bash
git branch -d feature/feature-name
```

### How to delete remote branch

```bash
git push origin --delete feature/feature-name
```
