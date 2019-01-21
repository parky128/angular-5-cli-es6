# angular-5-cli-es6
Testing how to include es6 sources into an Angular build

# Background
When attempting to include additional modules written in ES6, the angular-cli compiler fails with an error from UgligfyJS (called by Webpack under the hood).

# Setup

Make sure you have nodeJS installed first

Run `npm install`

Run `npm run start` to launch the local angular-cli dev server and open the application on http://localhost:4200

The only functionality is a console.log of the output of calling `getSession()` on the `@alertlogic/session` module, and a button that attempts to invoke a HTTP call via calling `getAccountDetails()` in `@alertlogic/client`. The HTTP call will fail since it requires an Alert Logic session to be initialised, but this doesnt matter for the purposes of demonstrating the issue in this repo.

# Building

Run `npm run build`

After a short while of building, an error will get emitted from UglifyJS:

````
ERROR in main.9426aca4f393d983b6d5.bundle.js from UglifyJs
Unexpected token: punc ()) [main.9426aca4f393d983b6d5.bundle.js:46883,4]
````

# Summary
So the main aim of this repo is to try and figure out a way of getting the ES6 modules to be transpiled down to ES5 via the angular-cli if possible, or perhaps some pre angular-cli compilation step?

