#!/bin/bash

# Navigate to the project directory
cd ~
cd /var/www/html/my-app

# Install dependencies
npm install

# Run the build script
npm run build
# abc
pm2 start npm
