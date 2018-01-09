#npm声明
npm install query --save<br/>
npm install bootstrap --save<br/>
npm install @types/query --save-dev<br/>

#包声明

##新建proxy.conf.json文件

###内容
{
  "/search":{
    "target":"http://59.71.36.18:5000"
  },
  "/api":{
    "target":"http://59.71.36.18:5400"
  }
}
###解释
对于所有http请求，以/search开头的会请求http://59.71.36.17:5000<br/>
对于所有http请求，以/api开头的会请求http://59.71.36.18:5400

##package.json
"start": "ng serve --proxy-config proxy.conf.json",


# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
