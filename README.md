# The-prime-package-for-prime-numbers

## Introduction

This package will check if a number is prime and generate prime numbers. This is useful since it can reduce the size of your code.

## Code Samples

The package can be used by using the functions `generatePrime` or `isPrime`.

The `generatePrime` takes 2 arguments. The first being in the lowest number the prime should be and the second being the largest the prime can be. For example the following code the lowest prime it can return is `1` and the largest is `97`.

```javascript
generatePrime(1, 100)
```

The `isPrime` takes 1 argument. That argument is the number you want to check if it is prime or not. If it is prime it will return `true` and if it is a composite number it will return `false`.

```javascript
isPrime(50) // return false
isPrime(19) // returns true
```

## Installation

This is how you install the package. At the top of your file(s) add this line:

```javascript
const { generatePrime, isPrime } = require('the-prime-package-for-prime-numbers');
```

That will import the function that are using in the package.