function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrime(min, max) {
  // Checks that both min and max are numbers
  if (isNaN(min) || isNaN(max)) {
    return "Please enter a number";
  }
  // Checks that min is less than max
  if (min > max) {
    return "Please enter a min less than max";
  }
  // Checks that min is greater than 0
  if (min < 0) {
    return "Please enter a min greater than 0";
  }

  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  while (!isPrime(number)) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return number;
}

function generatePrime(min, max, number) {
  // Checks that both min and max are numbers
  if (isNaN(min) || isNaN(max)) {
    return "Please enter a number";
  }
  // Checks that min is less than max
  if (min > max) {
    return "Please enter a min less than max";
  }
  // Checks that min is greater than 0
  if (min < 0) {
    return "Please enter a min greater than 0";
  }
  // Checks that number is a number
  if (isNaN(number)) {
    return "Please enter a number";
  }
  // Checks that number is greater than 0
  if (number < 0) {
    return "Please enter a number greater than 0";
  }
  let primes = [];
  let count = 0;
  while (count < number) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (isPrime(number)) {
      primes.push(number);
      count++;
    }
  }
  return primes;
}

function isPrimeNum(...numbers) {
  let primes = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 2) {
      primes.push(true);
    } else {
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
          primes.push(false);
          break;
        } else if (j != numbers[i] - 1) {
        } else {
          primes.push(true);
        }
      }
    }
  }
  return primes;
}

module.exports = { isPrime, generatePrime, generatePrime, isPrimeNum };