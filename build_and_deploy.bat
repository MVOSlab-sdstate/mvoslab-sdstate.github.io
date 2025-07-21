@echo off
setlocal enabledelayedexpansion

REM === CONFIG ===
set "REPO=MVOSlab-sdstate/mvoslab-sdstate.github.io"
set "BRANCH=gh-pages"
set "OUT_DIR=out"

REM === 1. Install dependencies if needed ===
IF NOT EXIST "..\mvos-lab-website\node_modules" (
  echo Installing dependencies...
  pushd ..\mvos-lab-website
  call npm install
  popd
)

REM === 2. Build and export the static site ===
pushd ..\mvos-lab-website
call npm run build
call npm run export
popd

REM === 3. Clone or prepare the gh-pages branch ===
IF EXIST "gh-pages-tmp" (
  rmdir /s /q gh-pages-tmp
)

git clone --branch %BRANCH% --single-branch https://github.com/%REPO% gh-pages-tmp 2>nul
IF %ERRORLEVEL% NEQ 0 (
  git clone https://github.com/%REPO% gh-pages-tmp
  pushd gh-pages-tmp
  git checkout --orphan %BRANCH%
  popd
) ELSE (
  echo Checked out existing gh-pages branch.
)

REM === 4. Copy exported static files ===
pushd gh-pages-tmp
git rm -rf . >nul 2>&1

xcopy /E /I /Y "..\mvos-lab-website\%OUT_DIR%" . >nul
echo.> .nojekyll

REM === 5. Commit and push if changes exist ===
git status --porcelain | findstr . >nul
IF %ERRORLEVEL% EQU 0 (
  git add .
  git commit -m "Deploy static site to GitHub Pages"
  git push origin %BRANCH%
) ELSE (
  echo No changes to deploy.
)

popd
rmdir /s /q gh-pages-tmp

echo Deployment complete! Your site should be live at: https://mvoslab-sdstate.github.io/
