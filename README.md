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

# Important notes
## chart.js
- Resizing is completely ridiculous and convoluted. Here's how it works:

# If the chart option "responsive" is set to false:
The chart size is the width and height properties of the canvas.
## If width and/or height are not set:
Defaults are width=300 and height=150.

#If the chart option "responsive" is set to true:
## If maintainAspectRatio is not set:
Default is maintainAspectRatio = true.
## If maintainAspectRatio is set to false:
The chart size is set to the size of the containing div.
## If maintainAspectRatio is set to true:
The width of the chart is the width of the containing div.
The height of the chart is the width of the containing div, divided by the aspectRatio.
aspectRatio is set to the canvas width divided by the canvas height.
## If width and height are not set:
aspectRatio is set in the options.
## If aspectRatio is not set:
Default is aspectRatio = 2.
**TO BE CLEAR: aspectRatio is set first by width/height properties of the canvas. This
cannot be overridden by the aspectRatio chart option. The canvas properties must be 
removed in order to use the aspectRatio chart option.**
Also, resizing follows the size of the containing div.

**BUG: when resizing window, root div does not properly resize grid element width.**
**help**

#App Logic

The layout should cater to the following busines logic:
##---FOR TRADE---
1. User decides to look for a trade, and opens the app.
   1. User logs in to the app, for the purpose of analysing a market for a profitable buy-sell pair.
   1. User inputs their current location, available cargo, and maximum distance they are willing to travel.
   1. User may also input an item category.
   1. User may also input one or more adjacent regions for querying.
1. The app now must decide on what items to query from the API.
   1. App queries its own database for relevant information.
   1. If information is not available, app queries the API.
   1. The app queries the API for a list of all relevant items in the region.
   1. If an item category was chosen, the app gathers aggregate data on each item in that category.
   1. Otherwise, the app gathers aggregate data on each and every item in the region. **POSSIBLE EFFICIENCY ISSUE**
   1. The app looks at recent buy-sell margins for each item.
   1. The app sorts the items by profit potential. **ALGORITHM REQUIRED**
   1. The app lists the items, and relevant data on market, such as:
      1. Distance from buy to sell.
      1. Distance from current position to buy.
      1. Profit ratio for distance travelled.
      1. Profit ratio for collateral dedicated.
      1. **TODO: more info?**
   1. App records all information queried from the API.
1. User selects a trade.
   1. The app flags the trade as "in progress", moving it to another section.
1. User completes a trade.
   1. The app flags as "done", moving it to an invisible section.
1. App records trade for user's metrics.

##---FOR ITEM DETAILS---
1. User selects an item.
   1. User inputs an item ID. *OR*
   1. User inputs an item name or portion of an item name. *OR*
   1. User inputs an item category.
1. App queries for item details.
   1. App should have its own database for item information.
1. App displays an item or list of items.
   1. If the list is long, categorize the list.
   1. The list should have a tree style, with expanding and contracting branches.

##---FOR MANUAL MARKET ANALYSIS---
1. User selects an item.
   1. User inputs an item ID. *OR*
   1. User inputs an item name or portion of an item name. *OR*
1. User may select more than one item.
1. User selects one or more regions.
   1. If one or more regions were already selected, use that selection instead.
1. App queries the API for selected item.
1. App displays some market history for selected item.
   1. Current buy-sell depth graph for each region.
   1. Buy-sell depth graph for all regions, combined.
   1. Price history graph for selected regions.
   1. Volume traded graph for selected regions.
   1. Price history and volume mixed graph for each region.
   1. **TODO: More data. Relevant data. etc**

## API querying strategy
The API should be considered overburdened and slow. Caching should be used as often as possible.
The API replies with the following cache headers
cache-control: public
etag: <etag>
expires: <expires>
last-modified: <last modified>

These can be used to maintain the app database. Historical information can and should be saved
in a persistent database! Data is good!

# IMPLEMENTATION

The app needs a lot of UI work. I don't know much about UI, and it would be difficult to call me
an artistic individual. This app will probably be ugly. I will try to make it streamlined at the
very least.
So far, implementation of the UI is the classic webpage. Topbar and sidebar, with content changing
based on router redirection. This should work, I guess.

On the backend, components send RequestActions to update store data. Components maintain subscriptions
to selectors to retrieve data which is updated.

RequestActions are picked up by Effects modules. *ALL* RequestActions are picked up by Effects modules.
If there are no side effects to the RequestAction (such as no API calls, or a direct update of the data store),
it should simply be converted to a StoreAction. 
If there are effects, do them in the relevant effects module.
If an Effects module needs to communicate with another Effects module, use an EffectsAction.
If an Effects module needs to update the store, use a StoreAction.

##File organisation

###Data sources
Each data source should have both a service and an effects module:

<datasource>.effects.ts <datasource>.service.ts

A datasource may have its own reducer, but probably shouldn't. I think it's an anti-pattern, since 
reducers are more for the logical grouping of data types, not sources.

###Data topics
Data topics should have an effects module and reducer.

####The "Item"
The "Item" topic consists purely of details related to item types, such as size and weight.
The reducer may not be necessary.
The effects module queries a database for item details.

####The "Market"
The "Market" topic consists of prices and locations for items, sorted by itemID and date.
The reducer stores market data.
The effects module queries other effects modules for market data.

####The "Trade"
The "Trade" topic consists of profitable buy-sell pairs for an item. It is a subtopic of the market.
The reducer may not be necessary.

##ACTION FLOW - UNIDIRECTIONAL, BABY!
Component         EffectsModule       Reducer         Store
                                    
(RequestAction)   --> (StoreAction)   --| Processed in relevant reducer  
                  --> (ErrorAction)   --| Processed in errorReducer
                  --> (EffectsAction) --> (StoreAction)   --|
                                      --> (ErrorAction)   --|
                                      --> (EffectsAction) --> ...

(RequestAction):  From component or service, to an effects module
(EffectsAction):  From an effects module, to another effects module, or to itself **might not be necessary**
(StoreAction):    From an effects module, to the store. **only effects modules! nowhere else! ...maybe?**
(ErrorAction):    From anywhere, to the store, to log an error

NGRX sends actions through reducers before effects, so RequestActions must not be processed in reducers.
StoreActions must only be processed in reducers. They must only adjust store contents.
**Components should not trigger StoreActions, in case side effects must occur first**

###What happens if there's an error in...
Component: dispatch an ErrorAction.
Service: dispatch an ErrorAction. **WARNING: could have multiple error messages if called from an effects module.**
(RequestAction): Effects module converts to ErrorAction
(EffectsAction): Effects module converts to ErrorAction
(ErrorAction): Directly log error using errorReducer
(StoreAction): Directly log error using errorReducer

# MODULES

## ESI
This module interfaces with the remote API. It should have the following:

### General requirements
 - It should be contained within its own ngModule. (More research required on ngModules)
 - It should have an Effects module named <esi.effects.ts>
 - It should have a service module name <esi.service.ts>
 - Research .spec.ts files. (What is this for? is it necessary? can we use it?)
 - ESI should respond to RequestActions for dynamic market data.
 - ESI should dispatch StoreActions to add dynamic market data to the store.
 - ESI should be able to cache all requests.

### Specific requirements
 - [ ] Request all items in a region (all pages, if necessary)
 - [ ] Request price history for specific item (all pages, region by region)
 - [ ] Request market orders for a specific item (all pages, region by region)
 - [ ] Request market orders for a specific location (more granular than region) (all pages, item by item)
 - [ ] Request market orders for a specific item in a specific region

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
