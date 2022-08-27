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

module.exports = { isPrime, generatePrime };