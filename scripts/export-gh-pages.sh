#!/bin/bash

set -e

npm run build
npm run export
rm -rf docs
mv out docs
touch docs/.nojekyll
git reset
git add docs
git commit -m "Atualizando a docs"
git push