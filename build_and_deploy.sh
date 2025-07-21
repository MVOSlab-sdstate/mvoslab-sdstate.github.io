#!/bin/bash

set -e

REPO="MVOSlab-sdstate/mvoslab-sdstate.github.io"
BRANCH="gh-pages"
OUT_DIR="out"

# 1. Install dependencies if needed
if [ ! -d "../mvos-lab-website/node_modules" ]; then
  echo "Installing dependencies..."
  (cd ../mvos-lab-website && npm install)
fi

# 2. Build and export the static site
(cd ../mvos-lab-website && npm run build && npm run export)

# 3. Prepare a temp directory for the gh-pages branch (in parent dir)
rm -rf gh-pages-tmp
if git clone --branch $BRANCH --single-branch "https://github.com/$REPO.git" gh-pages-tmp; then
  echo "Checked out existing gh-pages branch."
else
  git clone "https://github.com/$REPO.git" gh-pages-tmp
  cd gh-pages-tmp
  git checkout --orphan $BRANCH
  cd ..
fi
cd gh-pages-tmp
git rm -rf . || true

# 4. Copy exported site to the branch root
cp -r ../mvos-lab-website/$OUT_DIR/* .
touch .nojekyll

# 5. Commit and push
if [ -n "$(git status --porcelain)" ]; then
  git add .
  git commit -m "Deploy static site to GitHub Pages"
  git push origin $BRANCH
else
  echo "No changes to deploy."
fi

cd ..
rm -rf gh-pages-tmp

echo "Deployment complete! Your site should be live at: https://mvoslab-sdstate.github.io/" 