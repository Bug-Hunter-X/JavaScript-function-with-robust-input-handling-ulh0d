function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return -1; // Handle undefined case
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input: x must be a number.');
  } else {
    return x + 1; 
  }
}

console.log(foo(5)); // Output: 6
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo('hello')); // Throws an error