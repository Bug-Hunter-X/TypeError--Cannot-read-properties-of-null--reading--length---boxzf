# Uncommon JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common yet easily overlooked error in JavaScript: the `TypeError: Cannot read properties of null (reading 'length')` error.

## The Bug

The `bug.js` file contains a function that attempts to access the `length` property of a variable `x`.  If `x` is `null` or undefined, or not an object with a `length` property, this will throw the aforementioned error.  This is a subtle issue because it only occurs under specific conditions, making it difficult to debug.

## The Solution

The solution, provided in `bugSolution.js`, adds a check to ensure that `x` is an object and has the `length` property before trying to access it.  This prevents the error from occurring, making the code more robust and less prone to unexpected behavior.

## How to reproduce:

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js` and `node bugSolution.js`. Observe the output and error behavior.