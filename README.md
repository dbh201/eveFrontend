# EveFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

Let's talk about how to make this a real, scalable app that I can show off.
First thing's first - I need some kind of general idea of data flow.
The good news: I understand effects, and the store, and concepts behind reactive functional programming.
The bad news: I don't understand the specifics of TypeScript syntax and nuances of rxjs.
I know what I want to do, and I could write it on paper but I can't seem to code it properly.
Also I need a better debugging framework; if I keep throwing tap()s everywhere I'm going to end up
leaving one where it shouldn't be.

Oh, and I did absolutely zero error-checking. None. That's probably bad.

**ITERATION 1: "What is Angular? How does Angular work? How can I do basic things in angular?"**
I worked through the Angular 2 tutorial and practiced by making an eveMarket frontend.
This frontend was just to get a feel for how Angular functions, and how TypeScript syntax 
is. I renamed various parts of the tutorial and added new components and other things. 
There was no planning involved in the process, and this project could not be completely fleshed out.

As a result of this short-lived iteration, I learned the basics of:
1. Angular / angular-cli
1. node.js / npm
1. TypeScript and how it relates to Javascript

**ITERATION 2: "How is an Angular project organised? How can third-party libraries be added? How can Angular be used to make a complete project?**
This iteration could become a working project, but will lack sophisticated organisation. Components work,
and can interact through ngrx to share data. In addition, this iteration interacts with the Flask backend,
(which may later be removed in favour of a local sqlite library). It communicates with the remote API as well.
This project will continue to fruition and end up with an alpha deliverable app.

As a result of this iteration, I learned:
1. the definition and concept of reactive functional programming
   1. anonymous functions
   1. pure functions
   1. unidirectional data flow and how to implement it
   1. data immutability and how to implement it
1. TypeScript
   1. different versions of TypeScript exist with varying functionality
   1. various TypeScript nuances
1. rxjs syntax and design concepts
   1. the difference between pipeable operators and piping through dot chains
   1. switchMap, mergeMap/flatMap, map differences
   1. differences between imports of the same function, ie rxjs/operators map() is not rxjs map()
   1. various intermediate difficulty pipelines, such as aggregating values with reduce(), or mapping a value with its result in an anonymous function
   1. tap()ing pipelines for debugging
   1. TypeScript/rxjs weirdness with anonymous functions (type checking, automatic parameter assignment, etc)
1. ngrx store, actions, effects
   1. how to create a root store
   1. how to load the root store and attach it to a root reducer function in app.modules
   1. how to alter the store in the reducer
   1. how to create effect classes to link angular services with ngrx
   1. how to create and register effects within those classes, and add them to the root module
   1. how to return multiple actions from a single trigger action through an effect
1. module loading and dependency injection
   1. how to import modules
   1. what importing a module in app.modules.ts does
   1. how to use imported modules
   1. how to make a background process in the main app component - not using this because it's better to just use a service
   1. TODO: make a custom module containing services.

Once finished, a final iteration of the project will occur, but not from scratch. ngModules will be used for all logically connected components.
The state data will be clearly documented. Related objects will be grouped together (price data for an item should not be apart from item details).
Object properties will be lazy-loaded through actions upon routing to a relevant page. Object properties will be cached. Multiple stores may be used.
Multiple reducers will be used. If multiple stores are not used, the sub-reducers will only accept and return relevant portions of the main store.

**ITERATION 3: How can I use Angular, in tandem with third-party libraries, to create a full-featured application?**

 - [ ] Have clear, fleshed out, detailed, error-checked flowcharts for data flow.
 - [ ] Have clear, fleshed out, detailed, error-checked code.
 - [ ] Have a github repo with specific branches. No more master-for-everything.
 - [ ] Write one component at a time, using the flowchart.
 - [ ] Write component views with proper CSS.
 - [ ] Have a UI that is clean and looks good.
 - [ ] Have debug code ready but not enabled, such as tap()s within each rxjs stream. 
 - [ ] Have a debug and production version: one with the debug code, one without. 
 - [ ] Commented code is important. Comment the code in the debug version only.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
