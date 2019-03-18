# Learning - Javascript: Getting Started - course from Pluralsight

[Website for Course](https://learning-jan-2019-javascript-getting-started.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/bba422f6-2b1e-46aa-b3ba-04de7b5df0d2/deploy-status)](https://app.netlify.com/sites/learning-jan-2019-javascript-getting-started/deploys)

Following along with the course content

* [Javascript Basics](#javascript-basics)
* [Types and Arrays](#types-and-arrays)
* [Program Flow](#program-flow)
* [Functions](#functions)
* [Objects](#objects)
* [Web Pages - Basic Events](#web-pages---basic-events)
* [Web Pages - DOM Interactions](#web-pages---dom-interactions)

---

## Javascript Basics

```javascript
var name = "bob"; // declare and assign a variable
```

## Types and Arrays

Types include string, number, boolean, object, null, and undefined (and symbols).

```javascript
var choice = false;
typeof(choice); // boolean
```

```javascript
var name = "Bob";
console.log(`greetings ${name}`); // greetings bob - interpolation of the variable name via es6
```

## Program Flow

The major program flow techniques are using `if`, `if...else`, `switch...case`, and looping with `for`, `do...while`, `while`, and `for...in` (also `forEach`)

```javascript
var names = ['bob', 'hal', 'kal', 'ned'];

if(typeof(names) == 'object') {
  console.log("type is object");
} else {
  console.log("type is not an object");
}

// for loop
for(var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// while
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

// forEach
names.forEach(function(element) {
  console.log(element);
});
```

## Functions

The important aspects of functions include declaring a function, calling a function, adding arguments to a function, the return value of a function, and function scope.

```javascript
// declare a function
function greeting() {
  console.log("hello");
}

greeting(); // call a function

// adding an argument to a function
function greeting(name) {
  console.log("hello " + name);
}

// getting a return value from a function
function greeting(name) {
  var response = "hello " + name; // the variable response is only accessible from within the function
  return response;
}
```

## Objects

## Web Pages - Basic Events

## Web Pages - DOM Interactions
