git push origin --delete gh-pages
npm run docs:build

cd docs/.vuepress/dist
echo 'architecturecoding.com' > CNAME

git init
git remote add origin git@github.com:kevsersrca/blog.git
git add .
git commit -m "blog"
git push origin master:gh-pages
