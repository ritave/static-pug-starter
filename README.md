# Static Pug + Typescript + Sass starter
This starter allows easy creation of static webpages while allowing nicieties of npm
packagaes, Typescript, Sass and Pug

## Start serve server

    npm install
    npm run serve

Enjoy your server responsibly on 127.0.0.1:8080

The server supports hot-reloading of assets, typescript and auto-refreshing your browser
using livereload

## Create compiled files and production env

    npm install
    npm install -g gulp-cli
    guilp build
    docker-compose -f docker-compose-prod.yml build
    docker-compose -f docker-compose-prod.yml up
