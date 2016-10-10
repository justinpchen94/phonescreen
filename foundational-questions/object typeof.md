# What is a potential pitfall of using ‘typeof bar === "object"1 to determine if `bar` is an object? How can this pitfall be avoided?

`typeof bar === "object"` is a reliable way of checking if `bar` is an object, but in JavaScript `null` is also considered an object.
Following code will be confusing

```javascript
var bar = null;
console.log(typeof bar === "object");  // logs true!
```

easy workaround:

```javascript
console.log((bar !== null) && (typeof bar === "object"));  // logs false
```
_Note: above code snippet will return `true` if `bar` is a function. Make sure this is desired behavior. If not, alternative is:_

```javascript
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
```

_Note: the above snippet will also return `true` if `bar` is an array. If this is not desired, this is an example workaround: _

```javascript
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
```


