#!/usr/bin/env sh

npm run clear
npm install
npm run build -- --no-minify
USE_SSH=true npm run deploy -- --skip-build