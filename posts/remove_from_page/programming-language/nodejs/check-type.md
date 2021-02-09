---
title: "[JS, Node.js]: check object type"
date: 2020-12-18
type: snippet
tags: 
  - Node.js
  - JS
  - snippet
---


```js
function isObject(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Object;
}

function isArray(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Array;
}

function isBoolean(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Boolean;
}

function isFunction(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Function;
}

function isNumber(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Number;
}

function isString(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == String;
}

function isInstanced(obj)
{
    if(obj === undefined || obj === null) { return false; }

    if(isArray(obj)) { return false; }
    if(isBoolean(obj)) { return false; }
    if(isFunction(obj)) { return false; }
    if(isNumber(obj)) { return false; }
    if(isObject(obj)) { return false; }
    if(isString(obj)) { return false; }

    return true;
}
```


-----

reference: https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json