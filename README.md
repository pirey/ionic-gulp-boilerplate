## Installation & Setup
+ Run `npm install && bower install` to install dependencies

## Workflow

### Development mode

By running `gulp`, we start our development build process, consisting of:

+ compiling, concatenating, auto-prefixing of all .scss files required by app/styles/main.scss
+ creating vendor.js file from external sources defined in ./vendor.json from bower.json
+ linting all *.js files src/app, see .jshintrc for ruleset
+ automatically inject sources into index.html so we don't have to add / remove sources manually
+ build everything into .tmp folder
+ start local development server and serve from .tmp
+ start watchers to automatically lint javascript source files, compile scss and reload browser on changes

### Unit test

You can place test files in src/spec or anywhere in the src/** directory with `.spec.js` suffix to the filename

+ To run the tests, run `karma start` 
+ To run the tests once, run `karma start --single-run`


### Build

By running `gulp --build` or short `gulp -b`, we do the following:

+ concat all .js sources into single app.js file
+ **version** main.css and app.js
+ build everything into www
+ remove debugs messages such as console.log or alert with passing --release


### Run

By running `gulp -r <platform>`, we can run our app on a connected device

+ can be either `ios` or `android`, defaults to ios
+ It will run the `gulp --build` before, so we have a fresh version to test
