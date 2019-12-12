---
title: How does git branch work?
description: Git branch add, list and delete
lang: en-US
prev: false
next: false
editLink: true
image: /branch.png
date: 2019-12-11
---

### How to create new brach

```bash
git checkout -b feature/feature-name
```

### How to list branches

```bash
git branch
```

### How to delete remote branches

#### Delete local branch

```bash
git branch -d feature/feature-name
```

#### Delete remote branch

```bash
git push origin --delete feature/feature-name
``` 
