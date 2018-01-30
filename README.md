# Expresjs + Typescript + Pug + Sass starter
Proper configuring of a nice set-up for expressjs each time is too much work.
But having a nice starter that you can just clone is pretty rad

## Start serve server

    npm install
    npm run serve

Enjoy your server responsibly on 127.0.0.1:8080

The server supports hot-reloading of assets, typescript and auto-refreshing your browser
using livereload

### Run development in Docker

    docker-compose -f docker-compose-dev.yml build
    docker-compose -f docker-compose-dev.yml up

## Create compiled files and production env

    npm install
    npm install -g gulp-cli
    guilp build
    docker-compose -f docker-compose-prod.yml build
    docker-compose -f docker-compose-prod.yml up

## Known issues
* When developing in Docker container, hot-reload works part-way only. It sees changes to existing files but doesn't see new files in the `src/` folder
