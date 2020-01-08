#!/usr/bin/env bash

set -e

npm run build

cd dist

git init

git add -A

git commit -m "Page Deploy"

git push -f https://github.com/DongmyeongLee22/portfolio.git master:gh-pages

cd -