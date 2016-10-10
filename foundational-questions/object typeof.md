# What is a potential pitfall of using ‘typeof bar === "object" to determine if `bar` is an object? How can this pitfall be avoided?

* `typeof bar === "object"` is a reliable way of checking if `bar` is an object, but in JavaScript `null` is also considered an object.
```javascript
var bar = null;
console.log(typeof bar === "object");  // logs true!
```





