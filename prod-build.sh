#!/bin/bash

# Clean up
rm -rf prod-build

# Build
npm install --silent
npm run build

# Install prod dependencies
rm -rf node_modules
npm install --production --silent

# Copy files
mkdir prod-build
cp -Rf node_modules prod-build/node_modules > /dev/null 2>&1
cp -Rf dist/* prod-build > /dev/null 2>&1

# Zip
cd prod-build
zip -r prod-build.zip .
