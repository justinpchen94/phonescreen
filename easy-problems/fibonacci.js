//Write function to compute Nth fibonacci number.

var fib = function(n) {
  var result = 0
  if (n <= 2) {
    return n - 1;
  }
  result = fib(n - 1) + fib(n - 2) 
  return result;
};