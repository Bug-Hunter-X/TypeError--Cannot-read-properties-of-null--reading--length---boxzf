function foo(x) {
  if (x === null || typeof x !== 'object' || !('length' in x)) {
    return 0; // Handle null or non-object cases
  }
  return x.length; // Access length property only if it's safe
}
console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); //Output: 0
console.log(foo({})); //Output: 0