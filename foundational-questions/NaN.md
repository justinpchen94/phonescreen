# What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

The `NaN` property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric (e.g., an attempt to divide by zero).

Pitfalls:
Although NaN means “not a number”, its type is, believe it or not, Number:

```javascript
console.log(typeof NaN === "number");  // logs "true"
```

Additionally, NaN compared to anything – even itself! – is false:

```javascript
console.log(NaN === NaN);  // logs "false"
```

Better solution: 
* use `value !== value`, which would only produce `true` if the value is equal to `NaN`. 
* ES6 offers a new `Number.isNaN()` function, which is different and more reliable than the old global `isNaN()` function.






