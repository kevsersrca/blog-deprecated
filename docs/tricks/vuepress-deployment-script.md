---
title: Vuepress Deployment Script
description: Let deploy automation for gh-pages
lang: en-US
image: /vuepress.png
tag: gh-pages,vuepress
date: 2019-12-12
layout: Post
---

[[toc]]

## Vuepress Deployment Script for github-pages 

Please change gh-address and commit mesage and save deploy.sh

```bash
git push origin --delete gh-pages
npm run docs:build 

cd docs/.vuepress/dist 
echo 'architecturecoding.com' > CNAME 

git init
git remote add origin github-address 
git add . 
git commit -m "commit"  
git push origin master:gh-pages
```

After that, run the command `sh deploy.sh`

Happy Coding :rabbit:
