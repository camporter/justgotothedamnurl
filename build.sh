#!/bin/sh
set -e
npm install
npx webpack
npx web-ext build --overwrite-dest